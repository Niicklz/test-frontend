import React from "react";
import "./VideoSection.css";
import { VideoCard } from "./VideoCard/VideoCard";
import { Button } from "../commons/Button/Button";
import { Heading } from "../commons/Heading/Heading";
import { videosData } from "../../data/videosData";
export const VideoSection = ({ collection = [] }) => {
  return (
    <section className="video-section" id="videoSection">
      <Heading level="2">lastest videos</Heading>
      <div className="videos-container">
        {collection.map((video, index) => (
          <VideoCard
            key={index}
            videoUrl={video.videoUrl}
            title={video.title}
            poster={video.poster}
          />
        ))}
      </div>
      <Button text="View all" variant="solid" size="md" />
    </section>
  );
};
