import React from "react";
import "./VideoCard.css";

import { Heading } from "../../commons/Heading/Heading";

export const VideoCard = ({ videoUrl, title, poster }) => {
  return (
    <article className="video-card">
      <iframe
        width="320px"
        height="150px"
        src={videoUrl}
        title={title}
        allowFullScreen
      ></iframe>
      <Heading level="3" className="video-title">
        {title}
      </Heading>
    </article>
  );
};
