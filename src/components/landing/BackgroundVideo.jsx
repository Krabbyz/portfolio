import React from "react";
import vid from "../images/vid1.mp4";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div>
      <div className="overlay" />
      <video muted autoPlay preload="true" loop className="bg" src={vid} />
    </div>
  );
};
export default BackgroundVideo;
