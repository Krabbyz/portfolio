import React, { useEffect, useRef, useState } from "react";
import "./CustomScrollbar.css";

const MIN_THUMB_HEIGHT = 56;
const SCROLLBAR_GAP = 8;
const HIDE_DELAY = 900;

function CustomScrollbar() {
  const dragStateRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const isHoveringRef = useRef(false);
  const metricsRef = useRef({
    height: 0,
    top: 0,
    visible: false,
  });
  const [isShown, setIsShown] = useState(false);
  const [metrics, setMetrics] = useState({
    height: 0,
    top: 0,
    visible: false,
  });

  const updateMetrics = (nextMetrics) => {
    metricsRef.current = nextMetrics;
    setMetrics(nextMetrics);
  };

  const showScrollbar = () => {
    window.clearTimeout(hideTimeoutRef.current);
    setIsShown(true);
  };

  const scheduleHideScrollbar = () => {
    window.clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = window.setTimeout(() => {
      if (!isHoveringRef.current && !dragStateRef.current) {
        setIsShown(false);
      }
    }, HIDE_DELAY);
  };

  useEffect(() => {
    let frameId;

    const updateScrollbar = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = scrollHeight - viewportHeight;

      if (maxScroll <= 0) {
        updateMetrics({ height: 0, top: 0, visible: false });
        return;
      }

      const height = Math.max(
        (viewportHeight / scrollHeight) * viewportHeight,
        MIN_THUMB_HEIGHT
      );
      const maxTop = viewportHeight - height - SCROLLBAR_GAP * 2;
      const top = SCROLLBAR_GAP + (window.scrollY / maxScroll) * maxTop;

      updateMetrics({ height, top, visible: true });
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateScrollbar);
    };

    const handleScroll = () => {
      showScrollbar();
      requestUpdate();
      scheduleHideScrollbar();
    };

    updateScrollbar();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.clearTimeout(hideTimeoutRef.current);
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const handlePointerDown = (event) => {
    event.preventDefault();
    showScrollbar();
    event.currentTarget.setPointerCapture(event.pointerId);
    document.documentElement.classList.add("scrollbarDragging");

    dragStateRef.current = {
      pointerId: event.pointerId,
      startY: event.clientY,
      startTop: metricsRef.current.top,
    };
  };

  const handlePointerMove = (event) => {
    const dragState = dragStateRef.current;

    if (!dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    const { height } = metricsRef.current;
    const viewportHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const maxScroll = scrollHeight - viewportHeight;
    const maxTop = viewportHeight - height - SCROLLBAR_GAP * 2;

    const nextTop = Math.min(
      Math.max(dragState.startTop + event.clientY - dragState.startY, SCROLLBAR_GAP),
      SCROLLBAR_GAP + maxTop
    );
    const scrollProgress = (nextTop - SCROLLBAR_GAP) / maxTop;

    updateMetrics({
      ...metricsRef.current,
      top: nextTop,
    });

    document.scrollingElement.scrollTop = scrollProgress * maxScroll;
  };

  const handlePointerUp = (event) => {
    const dragState = dragStateRef.current;

    if (!dragState || dragState.pointerId !== event.pointerId) {
      return;
    }

    dragStateRef.current = null;
    document.documentElement.classList.remove("scrollbarDragging");
    event.currentTarget.releasePointerCapture(event.pointerId);
    scheduleHideScrollbar();
  };

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    showScrollbar();
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    scheduleHideScrollbar();
  };

  if (!metrics.visible) {
    return null;
  }

  return (
    <div
      className="customScrollbarArea"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <div
        className={`customScrollbarThumb${isShown ? " customScrollbarThumbVisible" : ""}`}
        style={{
          height: `${metrics.height}px`,
          transform: `translateY(${metrics.top}px)`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />
    </div>
  );
}

export default CustomScrollbar;
