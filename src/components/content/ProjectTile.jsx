import React, { useEffect, useState } from "react";
import "./ProjectTile.css";

const ProjectTile = ({
  image,
  title,
  description,
  link1,
  link1Text,
  link2,
  link2Text,
  skills,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageSrc = require(`../images/${image}`);

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

  return (
    <div className="project-tile">
      <div className="project-image">
        <button
          className="project-image-button"
          type="button"
          onClick={() => setIsExpanded(true)}
          aria-label={`Expand ${title} image`}
        >
          <img src={imageSrc} alt={title} />
        </button>
      </div>

      {isExpanded && (
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
          <a href={link1} target="_blank" rel="noopener noreferrer">
            {link1Text}
          </a>
          {link2 && (
            <a href={link2} target="_blank" rel="noopener noreferrer">
              {link2Text}
            </a>
          )}
        </div>

        <div className="project-skills">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={require(`../images/${skill.image}`)}
              className="skill-icon"
              alt={skill.name}
              title={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectTile;
