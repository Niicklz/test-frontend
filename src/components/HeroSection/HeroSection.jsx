import React from "react";
import "./HeroSection.css";
import { Button } from "../commons/Button/Button";
import { Heading } from "../commons/Heading/Heading";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-info-container">
        <Heading>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Heading>
        <Button
          className="btn"
          text="Lorem ipsum dolor sit"
          variant="solid"
          size="lg"
        />
        <Button
          className="btn"
          text="Lorem ipsum dolor sit amet"
          variant="outlined"
          size="lg"
        />
      </div>
      <div className="hero-img"></div>
    </section>
  );
};
