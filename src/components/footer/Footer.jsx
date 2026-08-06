import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiItchdotio } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/austinnguyen000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Krabbyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://krabbyz.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiItchdotio />
        </a>
        <a href="mailto:austinsworkstuffs@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p className="copyright">Austin Nguyen &copy; 2024 - {currentYear}</p>
    </div>
  );
};
export default Footer;
