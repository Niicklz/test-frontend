import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { CountDown } from "./components/Header/CountDown/CountDown";
import { InfoSection } from "./components/InfoSection/InfoSection";
import { DrinkSection } from "./components/DrinkSection/DrinkSection";
import { DrinkCard } from "./components/DrinkSection/DrinkCard/DrinkCard";
import drinkImageOne from "./assets/drinkSectionImages/drink-image1.png";
import drinkImageTwo from "./assets/drinkSectionImages/drink-image2.png";
import drinkImageThree from "./assets/drinkSectionImages/drink-image3.png";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { VideoSection } from "./components/VideoSection/VideoSection";
import { FormSection } from "./components/FormSection/FormSection";
import { NoticeSection } from "./components/NoticeSection/NoticeSection";
import { ImagesSection } from "./components/ImagesSection/ImagesSection";
import { Footer } from "./components/Footer/Footer";
import { videosData } from "./data/videosData";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <CountDown />
      <InfoSection
        title="Lorem ipsum dolor sit amet"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae
          sequi reiciendis dolore, sit culpa dolor nesciunt distinctio illum in
          perspiciatis quia similique rem ullam, itaque sunt sapiente debitis.
          Voluptas repellendus sed officia. Voluptatem aut, deserunt consequatur
          eum dicta facere voluptatibus vitae deleniti quaerat quia nulla fuga
          velit numquam molestias. Facere laborum modi consectetur soluta a,
          quis odio eaque ad. Dicta cum nam ducimus harum temporibus
          consequuntur veritatis perferendis a quaerat ab animi, sequi cumque
          laudantium laborum ut magni sapiente consectetur saepe quae sunt quo
          placeat dolor. Tempore, expedita architecto error ratione dolore nam
          nesciunt facere libero totam! Debitis, sint."
      />
      <DrinkSection
        title="Lorem ipsum"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua."
      >
        <DrinkCard img={drinkImageOne} title="Lorem ipsum" />
        <DrinkCard img={drinkImageTwo} title="Lorem ipsum" />
        <DrinkCard img={drinkImageThree} title="Lorem ipsum" />
      </DrinkSection>
      <HeroSection />
      <VideoSection collection={videosData} />
      <FormSection />
      <NoticeSection />
      <ImagesSection />
      <Footer />
    </div>
  );
};
