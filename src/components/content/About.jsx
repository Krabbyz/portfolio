import React from "react";
import "./About.css";

const profileImage = require("../images/logos/snowman_happy.png");

const technologyGroups = [
  {
    title: "Frontend",
    skills: [
      { image: "react.svg", name: "React" },
      { image: "vite.svg", name: "Vite" },
      { image: "nextjs.svg", name: "Next.js" },
      { image: "materialui.svg", name: "MaterialUI" },
      { image: "tailwindcss.svg", name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { image: "nodejslight.svg", name: "Node.js" },
      { image: "expressjs.svg", name: "Express.js" },
      { image: "django.svg", name: "Django" },
      { image: "graphql.svg", name: "GraphQL" },
      { image: "fastapi.svg", name: "FastAPI" },
      { image: "openapi.svg", name: "OpenAPI" },
      { image: "swagger.svg", name: "Swagger" },
      { image: "supabase.svg", name: "Supabase" },
      { image: "postgres.svg", name: "PostgreSQL" },
    ],
  },
  {
    title: "Developer Tools & Testing",
    skills: [
      { image: "docker.png", name: "Docker" },
      { image: "nginx.svg", name: "Nginx" },
      { image: "aws.svg", name: "AWS EC2" },
      { image: "oracle.png", name: "Oracle Cloud" },
      { image: "openai.svg", name: "Codex" },
      { image: "claude.svg", name: "Claude Code" },
      { image: "cursor.svg", name: "Cursor" },
      { image: "unity.png", name: "Unity3D" },
      { image: "vitest.svg", name: "Vitest" },
      { image: "reacttestinglibrary.svg", name: "React Testing Library" },
      { image: "puppeteer.svg", name: "Puppeteer" },
      { image: "msw.svg", name: "Mock Service Worker (MSW)" },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <h1 className="header-text about-header">About Me</h1>

      <div className="about-layout">
        <div className="about-intro">
          <div className="about-profile" aria-label="Austin Nguyen profile photo">
            <img src={profileImage} alt="" aria-hidden="true" />
          </div>

          <div className="about-bio">
            <p>
              Hi, I’m Austin Nguyen. I’ve been fascinated by computers for as long as I can remember, and that curiosity grew into a passion for building software and solving problems through technology.
            </p>
            <p>
              I enjoy creating practical solutions that make things easier, more efficient, and more enjoyable to use. Whether I’m learning a new tool or improving an existing project, I’m always looking for ways to grow as a developer and strengthen my skills.
            </p>
          </div>
        </div>

        <div className="about-technologies" aria-label="Technology groups">
          {technologyGroups.map((group) => (
            <article className="technology-panel" key={group.title}>
              <h2>{group.title}</h2>
              <div className="technology-list">
                {group.skills.map((skill) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
