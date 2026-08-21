import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import { CaretDownOutlined } from "@ant-design/icons";

const LandingPage = () => {
  const [isScrollIndicatorVisible, setIsScrollIndicatorVisible] = useState(true);

  useEffect(() => {
    const updateScrollIndicator = () => {
      setIsScrollIndicatorVisible(window.scrollY <= 0);
    };

    updateScrollIndicator();
    window.addEventListener("scroll", updateScrollIndicator, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollIndicator);
    };
  }, []);

  return (
    <div className="frontpage">
      <div className="title centerText">
        <h1 className="name">AUSTIN NGUYEN</h1>
        <h3 className="subtitle">SOFTWARE DEVELOPER</h3>
      </div>
      <a
        href="#content"
        className={`scrollIndicator${
          isScrollIndicatorVisible ? "" : " scrollIndicatorHidden"
        }`}
      >
        <CaretDownOutlined />
      </a>
    </div>
  );
};
export default LandingPage;
