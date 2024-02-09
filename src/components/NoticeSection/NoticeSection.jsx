import React from "react";
import { Button } from "../commons/Button/Button";
import "./NoticeSection.css";
import { Heading } from "../commons/Heading/Heading";
import { Paragraph } from "../commons/Paragraph/Paragraph";

export const NoticeSection = () => {
  return (
    <section className="notice-section">
      <div className="notice-section-info-container">
        <Heading>Lorem ipsum dolor sit.</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere
          et omnis possimus quisquam? Illo totam qui saepe voluptate
          consequuntur.
        </Paragraph>

        <Button text="view all" variant="solid" size="md" />
      </div>
    </section>
  );
};
