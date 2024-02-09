import React from "react";
import { NavBar } from "./NavBar/NavBar";
import "./Header.css";
import { Button } from "../commons/Button/Button";
import { LiveBar } from "./LiveBar/LiveBar";
import { Heading } from "../commons/Heading/Heading";

export const Header = () => {
  return (
    <header className="header">
      <LiveBar text="Lorem ipsum dolor sit amet." directLink="#" />
      <NavBar />
      <div className="title-and-btn-container">
        <Heading level="1">
          <span>Lorem, ipsum.</span>
          <span className="highlighted">Lorem, ipsum dolor.</span>
          <span>Lorem, ipsum.</span>
        </Heading>
        <Button variant="solid" text="what is the next" size="sm" />
      </div>
    </header>
  );
};
