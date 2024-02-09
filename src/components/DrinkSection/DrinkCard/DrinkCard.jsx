import React from "react";
import "./DrinkCard.css";
import { AppImage } from "../../commons/Image/AppImage";
import { Paragraph } from "../../commons/Paragraph/Paragraph";

export const DrinkCard = ({ img, title }) => {
  return (
    <figure className="drink-card">
      <AppImage imgUrl={img} imgAlt="drink-image" />
      <Paragraph className="drink-name">{title}</Paragraph>
    </figure>
  );
};
