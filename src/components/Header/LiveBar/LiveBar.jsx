import React from "react";

import "./LiveBar.css";

import { SignalIcon } from "@heroicons/react/16/solid";
import { PlayIcon } from "@heroicons/react/24/solid";
import { textLenghtFilter } from "../../../utils/textLenghtFilter";
import { Paragraph } from "../../commons/Paragraph/Paragraph";

export const LiveBar = ({ text, directLink = "#" }) => {
  const finalText = textLenghtFilter(text);
  return (
    <div className="live-container">
      <div className="live-icon">
        <span>Live</span>
        <SignalIcon className="stream-icon" />
      </div>

      <Paragraph className="stream-text">{finalText}</Paragraph>

      <a className="join-now-btn" href={directLink}>
        <span>join now!</span>
        <div className="play-icon-container">
          <PlayIcon className="play-icon" />
        </div>
      </a>
    </div>
  );
};
