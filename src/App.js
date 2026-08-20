import React from "react";
import BackgroundVideo from "./components/landing/BackgroundVideo";
import LandingPage from "./components/landing/LandingPage";
import About from "./components/content/About";
import Projects from "./components/content/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <BackgroundVideo />
      <LandingPage />
      <div id="content">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
