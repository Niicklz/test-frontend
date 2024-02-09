import React from "react";
import "./VideoCard.css";

import { Heading } from "../../commons/Heading/Heading";
import video from "../../../../public/video.mp4";

export const VideoCard = ({ videoUrl, title, poster }) => {
  return (
    <article className="video-card">
      <video
        width="320"
        height="150"
        id="mainVideo"
        src={video}
        muted
        controls
      ></video>
      <Heading level="3" className="video-title">
        {title}
      </Heading>
    </article>
  );
};
