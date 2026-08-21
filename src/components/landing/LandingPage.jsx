import React from "react";
import "./LandingPage.css";
import { CaretDownOutlined } from "@ant-design/icons";

const LandingPage = () => {
  return (
    <div className="frontpage">
      <div className="title centerText">
        <h1 className="name">AUSTIN NGUYEN</h1>
        <h3 className="subtitle">SOFTWARE DEVELOPER</h3>
      </div>
      <a href="#content" className="scrollIndicator">
        <CaretDownOutlined />
      </a>
    </div>
  );
};
export default LandingPage;
