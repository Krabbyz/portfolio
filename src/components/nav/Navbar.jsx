import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY >= window.innerHeight * 0.1);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isVisible ? "navbarVisible" : ""}`}
      aria-label="Primary navigation"
    >
      {links.map((link) => (
        <a className="navbarLink" href={link.href} key={link.href}>
          <span>{link.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
