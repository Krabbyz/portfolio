import React, { useEffect, useRef } from "react";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const colors = [
      "rgba(0, 143, 45,",
      "rgba(0, 181, 60,",
      "rgba(0, 214, 75,",
      "rgba(0, 235, 90,",
      "rgba(0, 108, 35,",
    ];
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let dots = [];
    let animationFrameId;
    let interactionStrength = 1;
    let targetInteractionStrength = 1;
    let transitionStartStrength = 1;
    let transitionStartTime = performance.now();
    const fadeDuration = 700;

    const updateInteractionTarget = () => {
      const nextTarget = window.scrollY < window.innerHeight / 2 ? 1 : 0;

      if (nextTarget !== targetInteractionStrength) {
        transitionStartStrength = interactionStrength;
        transitionStartTime = performance.now();
        targetInteractionStrength = nextTarget;
      }
    };

    const getSettings = () => {
      const width = window.innerWidth;

      if (width > 1600) {
        return { count: 300, distance: 105, radius: 400, triangles: 42 };
      }

      if (width > 1300) {
        return { count: 265, distance: 95, radius: 362.5, triangles: 34 };
      }

      if (width > 900) {
        return { count: 185, distance: 62, radius: 325, triangles: 24 };
      }

      if (width > 600) {
        return { count: 105, distance: 46, radius: 237.5, triangles: 14 };
      }

      return { count: 70, distance: 0, radius: 0, triangles: 0 };
    };

    const createDot = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: -0.55 + Math.random() * 1.1,
      vy: -0.55 + Math.random() * 1.1,
      radius: 0.7 + Math.random() * 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    const resizeCanvas = () => {
      updateInteractionTarget();
      const pixelRatio = window.devicePixelRatio || 1;
      const { innerWidth, innerHeight } = window;

      canvas.width = innerWidth * pixelRatio;
      canvas.height = innerHeight * pixelRatio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const settings = getSettings();
      dots = Array.from({ length: settings.count }, createDot);
    };

    const drawDot = (dot, settings, strength) => {
      const distanceFromMouse = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);
      const fadeDistance = Math.max(window.innerWidth / 1.5, 1);
      const opacity = Math.max(0.15, 1 - distanceFromMouse / fadeDistance);

      context.beginPath();
      context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      context.fillStyle = `${dot.color} ${opacity})`;
      context.shadowBlur = 6;
      context.shadowColor = `${dot.color} ${Math.min(opacity, 0.45)})`;
      context.fill();
      context.shadowBlur = 0;

      if (strength > 0 && settings.radius && settings.distance) {
        for (const otherDot of dots) {
          const dotDistance = Math.hypot(dot.x - otherDot.x, dot.y - otherDot.y);

          if (
            dotDistance < settings.distance &&
            distanceFromMouse < settings.radius
          ) {
            const lineOpacity = Math.max(
              0,
              1 - distanceFromMouse / settings.radius - 0.2
            ) * strength;

            context.beginPath();
            context.moveTo(dot.x, dot.y);
            context.lineTo(otherDot.x, otherDot.y);
            context.strokeStyle = `rgba(70, 240, 110, ${lineOpacity})`;
            context.stroke();
          }
        }
      }
    };

    const drawTriangles = (settings, strength) => {
      if (
        strength <= 0 ||
        !settings.radius ||
        !settings.distance ||
        !settings.triangles
      ) {
        return;
      }

      const triangleDistance = settings.distance * 1.15;
      let trianglesDrawn = 0;

      for (let index = 0; index < dots.length; index += 1) {
        if (trianglesDrawn >= settings.triangles) {
          return;
        }

        const dot = dots[index];
        const distanceFromMouse = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);

        if (distanceFromMouse > settings.radius) {
          continue;
        }

        const nearbyDots = [];

        for (let otherIndex = index + 1; otherIndex < dots.length; otherIndex += 1) {
          const otherDot = dots[otherIndex];
          const dotDistance = Math.hypot(dot.x - otherDot.x, dot.y - otherDot.y);

          if (dotDistance < triangleDistance) {
            nearbyDots.push({ dot: otherDot, index: otherIndex });
          }

          if (nearbyDots.length >= 5) {
            break;
          }
        }

        for (let first = 0; first < nearbyDots.length - 1; first += 1) {
          for (let second = first + 1; second < nearbyDots.length; second += 1) {
            if (trianglesDrawn >= settings.triangles) {
              return;
            }

            const firstDot = nearbyDots[first].dot;
            const secondDot = nearbyDots[second].dot;
            const neighborDistance = Math.hypot(
              firstDot.x - secondDot.x,
              firstDot.y - secondDot.y
            );

            if (
              neighborDistance < triangleDistance &&
              (index + nearbyDots[first].index + nearbyDots[second].index) % 5 === 0
            ) {
              const fillOpacity = Math.max(
                0,
                (1 - distanceFromMouse / settings.radius) * 0.075
              ) * strength;

              context.beginPath();
              context.moveTo(dot.x, dot.y);
              context.lineTo(firstDot.x, firstDot.y);
              context.lineTo(secondDot.x, secondDot.y);
              context.closePath();
              context.fillStyle = `rgba(103, 214, 151, ${fillOpacity})`;
              context.fill();
              trianglesDrawn += 1;
            }
          }
        }
      }
    };

    const animate = (currentTime) => {
      const settings = getSettings();
      const transitionProgress = Math.min(
        (currentTime - transitionStartTime) / fadeDuration,
        1
      );

      interactionStrength =
        transitionStartStrength +
        (targetInteractionStrength - transitionStartStrength) *
          transitionProgress;
      const strength = interactionStrength;

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.lineWidth = 0.35;
      drawTriangles(settings, strength);

      dots.forEach((dot, index) => {
        if (index === 0 && strength > 0) {
          dot.x = mouse.x;
          dot.y = mouse.y;
          dot.radius = 1.8;
          dot.color = "rgba(146, 235, 181,";
        } else {
          if (dot.x < 0 || dot.x > window.innerWidth) {
            dot.vx *= -1;
          }

          if (dot.y < 0 || dot.y > window.innerHeight) {
            dot.vy *= -1;
          }

          dot.x += dot.vx;
          dot.y += dot.vy;
        }

        drawDot(dot, settings, strength);
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    updateInteractionTarget();
    resizeCanvas();
    animate(performance.now());

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", updateInteractionTarget, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", updateInteractionTarget);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="background">
      <canvas
        ref={canvasRef}
        className="bgCanvas"
        aria-hidden="true"
      />
      <div className="overlay" />
    </div>
  );
};
export default BackgroundVideo;
