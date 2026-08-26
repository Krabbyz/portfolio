import React, { useEffect, useState } from "react";
import "./ProjectTile.css";

const ProjectTile = ({
  image,
  title,
  description,
  links,
  skills,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [canExpandImage, setCanExpandImage] = useState(true);
  const imageSrc = require(`../images/projects/${image}`);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px), (pointer: coarse)");
    const updateCanExpandImage = () => {
      setCanExpandImage(!mediaQuery.matches);
    };

    updateCanExpandImage();
    mediaQuery.addEventListener("change", updateCanExpandImage);

    return () => {
      mediaQuery.removeEventListener("change", updateCanExpandImage);
    };
  }, []);

  useEffect(() => {
    if (!isExpanded) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("project-modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("project-modal-open");
    };
  }, [isExpanded]);

  useEffect(() => {
    if (!canExpandImage) {
      setIsExpanded(false);
    }
  }, [canExpandImage]);

  return (
    <div className="project-tile">
      <div className="project-image">
        <button
          className="project-image-button"
          type="button"
          onClick={() => {
            if (canExpandImage) {
              setIsExpanded(true);
            }
          }}
          aria-label={
            canExpandImage ? `Expand ${title} image` : `${title} image`
          }
          disabled={!canExpandImage}
        >
          <img src={imageSrc} alt={title} />
        </button>
      </div>

      {canExpandImage && isExpanded && (
        <div
          className="project-image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} expanded image`}
          onClick={() => setIsExpanded(false)}
        >
          <button
            className="project-image-modal-close"
            type="button"
            onClick={() => setIsExpanded(false)}
            aria-label="Close expanded image"
          >
            &times;
          </button>
          <img
            src={imageSrc}
            alt={title}
            className="project-image-modal-img"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="project-links">
          {links.map((projectLink) => (
            <a
              key={projectLink.link}
              href={projectLink.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projectLink.text}
            </a>
          ))}
        </div>

        <div className="project-skills">
          {skills.map((skill) => (
            <div className="skill-item" key={`${title}-${skill.name}`}>
              <img
                src={require(`../images/logos/${skill.image}`)}
                className="skill-icon"
                alt={skill.name}
              />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectTile;
