import React from "react";
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
  return (
    <div className="project-tile">
      <div className="project-image">
        <img src={require(`../images/${image}`)} alt={title} />
      </div>

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
