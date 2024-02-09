import React from "react";
import "./VideoCard.css";

import { Heading } from "../../commons/Heading/Heading";

export const VideoCard = ({ videoUrl, title, poster }) => {
  return (
    <article className="video-card">
      <video
        width="320px"
        height="150"
        id="mainVideo"
        src="/public/example-vid.mp4"
        muted
        controls
      ></video>
      <Heading level="3" className="video-title">
        {title}
      </Heading>
    </article>
  );
};
