import React, { useState } from "react";
import "./ImagesSection.css";

import { Button } from "../commons/Button/Button";
import { AppImage } from "../commons/Image/AppImage";
import { Heading } from "../commons/Heading/Heading";
import { cloudinaryImgURLBuilder } from "../../utils/cloudinaryImgURLBuilder";
import { imagesData } from "../../data/imagesData";

export const ImagesSection = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const filteredImages = imagesData.filter((img) =>
    img.includes(`section${currentSection}`)
  );

  return (
    <section className="section-images">
      <Heading>Lorem ipsum dolor sit amet</Heading>
      <div className="images-cont">
        {filteredImages.map((img, index) => {
          return (
            <div key={index} className="image-container">
              <AppImage imgUrl={img} imgAlt="drink" className="img" />
            </div>
          );
        })}
      </div>
      <div className="btns-container">
        <button
          onClick={() => setCurrentSection(1)}
          className={`btn-carousel ${currentSection === 1 ? "active" : ""}`}
        ></button>
        <button
          onClick={() => setCurrentSection(2)}
          className={`btn-carousel ${currentSection === 2 ? "active" : ""}`}
        ></button>
        <button
          onClick={() => setCurrentSection(3)}
          className={`btn-carousel ${currentSection === 3 ? "active" : ""}`}
        ></button>
      </div>
      <Button text="view all" variant="solid" size="md" />
    </section>
  );
};
