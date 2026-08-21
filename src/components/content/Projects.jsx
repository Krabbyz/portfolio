import React from "react";
import ProjectTile from "./ProjectTile";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects-padding">
      <h1 className="header-text">
        Here are some things I've built in my freetime
      </h1>
      <ProjectTile
        image="slugmarketplace.png"
        title="Slug Marketplace"
        description="An online marketplace where users can browse and purchase products across dozens of categories, view detailed item pages with pricing and reviews, and add items to their cart."
        link1="https://slugmarketplace.com/"
        link1Text="View"
        skills={[
          { image: "react.svg", name: "React" },
          { image: "nodejslight.svg", name: "Node.js" },
          { image: "graphql.svg", name: "GraphQL" },
          { image: "js.svg", name: "JavaScript" },
          { image: "postgres.svg", name: "PostgreSQL" },
          { image: "docker.png", name: "Docker" },
          { image: "aws.svg", name: "AWS EC2" },
        ]}
      />
      <ProjectTile
        image="bathroomlocator2.png"
        title="Bathroom Locator"
        description="Guides you to the nearest restroom."
        link1="https://bathroom-locator.up.railway.app/"
        link1Text="View"
        link2="https://github.com/harshitabha/bathroom-locator"
        link2Text="Github"
        skills={[
          { image: "react.svg", name: "React" },
          { image: "nodejslight.svg", name: "Node.js" },
          { image: "js.svg", name: "JavaScript" },
          { image: "postgres.svg", name: "PostgreSQL" },
          { image: "docker.png", name: "Docker" },
        ]}
      />
      <ProjectTile
        image="krabbybot.jpg"
        title="Krabby Bot"
        description="A Discord bot that logs how long a server call has been going for. It posts the duration in a designated text channel and pins the server’s record for the longest call duration. "
        link1="https://github.com/Krabbyz/Krabby_Bot"
        link1Text="Github"
        skills={[
          { image: "python.svg", name: "Python" },
          { image: "docker.png", name: "Docker" },
          { image: "oracle.png", name: "Oracle Cloud Infrastructure" },
        ]}
      />
      <ProjectTile
        image="inventory.jpg"
        title="Inventory Management System"
        description="A inventory management system used to keep track of items in stock. Made for use at Gong Cha Hayward."
        link1="https://github.com/Krabbyz/inventory"
        link1Text="Github"
        skills={[
          { image: "react.svg", name: "React" },
          { image: "js.svg", name: "JavaScript" },
          { image: "django.svg", name: "Django" },
          { image: "python.svg", name: "Python" },
          { image: "postgres.svg", name: "PostgreSQL" },
          { image: "docker.png", name: "Docker" },
        ]}
      />
      <ProjectTile
        image="allianceofkingdoms.jpg"
        title="Alliance of Kingdoms"
        description="A small tower defense game created in under 1 month with a couple of friends."
        link1="https://krabbyz.itch.io/alliance-of-kingdoms"
        link1Text="Play"
        link2="https://github.com/Krabbyz/CMPM-80K_Final"
        link2Text="Github"
        skills={[{ image: "gdevelop.png", name: "GDevelop" }]}
      />
      <ProjectTile
        image="jumper.png"
        title="Jumper"
        description="A Unity Game Project inspired by Doodle Jump, made using Unity and C#. This project focused on learning Unity and implementing procedural generation."
        link1="https://krabbyz.itch.io/jumper"
        link1Text="Play"
        skills={[
          { image: "unity.png", name: "Unity3D" },
          { image: "csharp.svg", name: "C#" },
        ]}
      />
    </div>
  );
};
export default Projects;
