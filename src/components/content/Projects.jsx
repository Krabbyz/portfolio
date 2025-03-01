import React from "react";
import ProjectTile from "./ProjectTile";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1 style={{ color: "#ffffff" }}>
        Here are some things I've built in my freetime
      </h1>
      <ProjectTile
        image="inventory.jpg"
        title="Inventory Management System"
        description="A inventory management system used to keep track of items in stock. Made for use at Gong Cha Hayward."
        link1="https://github.com/Krabbyz/inventory"
        link1Text="Github"
        skills={[
          "react.svg",
          "js.svg",
          "django.svg",
          "python.svg",
          "docker.png",
        ]}
      />
      <ProjectTile
        image="jumper.png"
        title="Jumper"
        description="A Unity Game Project inspired by Doodle Jump, made using Unity and C#. This project focused on learning Unity and implementing procedural generation."
        link1="https://krabbyz.itch.io/jumper"
        link1Text="View"
        skills={["unity.png", "csharp.svg"]}
      />
    </div>
  );
};
export default Projects;
