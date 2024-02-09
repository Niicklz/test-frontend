import React from "react";
import "./DrinkSection.css";
import { Button } from "../commons/Button/Button";
import { Heading } from "../commons/Heading/Heading";
import { Paragraph } from "../commons/Paragraph/Paragraph";

export const DrinkSection = ({ title, text, children }) => {
  return (
    <section className="drink-section">
      <Heading level="2" className="drink-section-title">
        {title}
      </Heading>
      <Paragraph className="drink-section-text">{text}</Paragraph>
      <div className="images-container">{children}</div>
      <Button text="Learn more" variant="outlined" size="md" />
    </section>
  );
};
