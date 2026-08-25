import React from "react";
import "./TechnologyPanel.css";

const TechnologyPanel = ({ title, skills }) => {
  return (
    <article className="technology-panel">
      <h2>{title}</h2>
      <div className="technology-list">
        {skills.map((skill) => (
          <div className="technology-item" key={skill.name}>
            <img
              src={require(`../images/logos/${skill.image}`)}
              alt=""
              aria-hidden="true"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default TechnologyPanel;
