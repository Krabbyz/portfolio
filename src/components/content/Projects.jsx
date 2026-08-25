import React from "react";
import ProjectTile from "./ProjectTile";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects-padding">
      <h1 className="header-text projects-header">
        Here are some things I've built in my freetime
      </h1>
      <ProjectTile
        image="slugmarketplace.png"
        title="Slug Marketplace"
        description="An online marketplace where users can browse and purchase products across dozens of categories, view detailed item pages with pricing and reviews, and add items to their cart."
        links={[{ text: "View", link: "https://slugmarketplace.com/" }]}
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
        image="bathroomlocator.png"
        title="Bathroom Locator"
        description="A web app that helps users find nearby restrooms on an interactive map, view details like gender-neutral access and menstrual product availability, route to a selected restroom through Google Maps, and contribute new locations."
        links={[
          { text: "View", link: "https://bathroom-locator.up.railway.app/" },
          { text: "Github", link: "https://github.com/harshitabha/bathroom-locator" },
          { text: "Design Doc", link: "https://www.figma.com/design/h6qSHcfnFbYFndjbr4gzcV/Bathroom-Locator?node-id=0-1&p=f&t=pvC2A1zGJEREuQhi-0" },
        ]}
        skills={[
          { image: "react.svg", name: "React" },
          { image: "nodejslight.svg", name: "Node.js" },
          { image: "js.svg", name: "JavaScript" },
          { image: "postgres.svg", name: "PostgreSQL" },
          { image: "docker.png", name: "Docker" },
          { image: "supabase.svg", name: "Supabase" },
        ]}
      />
      <ProjectTile
        image="krabbybot.jpg"
        title="Krabby Bot"
        description="A Discord bot that logs how long a server call has been going for. It posts the duration in a designated text channel and pins the server’s record for the longest call duration. "
        links={[
          { text: "Github", link: "https://github.com/Krabbyz/Krabby_Bot" },
          { text: "Add to server", link: "https://discord.com/oauth2/authorize?client_id=1415030788306763856" },
        ]}
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
        links={[{ text: "Github", link: "https://github.com/Krabbyz/inventory" }]}
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
        links={[
          { text: "Play", link: "https://krabbyz.itch.io/alliance-of-kingdoms" },
          { text: "Github", link: "https://github.com/Krabbyz/CMPM-80K_Final" },
        ]}
        skills={[{ image: "gdevelop.png", name: "GDevelop" }]}
      />
      <ProjectTile
        image="jumper.png"
        title="Jumper"
        description="A Unity Game Project inspired by Doodle Jump, made using Unity and C#. This project focused on learning Unity and implementing procedural generation."
        links={[{ text: "Play", link: "https://krabbyz.itch.io/jumper" }]}
        skills={[
          { image: "unity.png", name: "Unity3D" },
          { image: "csharp.svg", name: "C#" },
        ]}
      />
    </div>
  );
};
export default Projects;
