import React from "react";
import "./InfoSection.css";
import exampleDrink from "../../assets/infoSectionImages/example-drink.png";
import { AppImage } from "../commons/Image/AppImage";
import { Heading } from "../commons/Heading/Heading";
import { Paragraph } from "../commons/Paragraph/Paragraph";

export const InfoSection = ({ title, text }) => {
  return (
    <section className="info-section">
      <div className="text-info-container">
        <Heading level="2" className="info-title">
          Lorem ipsum dolor sit amet
        </Heading>
        <Paragraph className="info-text">{text}</Paragraph>
      </div>
      <figure className="image-container">
        <AppImage imgUrl={exampleDrink} imgAlt="example-drink" />
      </figure>
    </section>
  );
};
