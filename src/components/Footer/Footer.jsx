import React from "react";

import "./Footer.css";
import iconGrab from "../../assets/header/icongrab.png";
import { AppImage } from "../commons/Image/AppImage";
import { Paragraph } from "../commons/Paragraph/Paragraph";

export const Footer = () => {
  return (
    <footer className="footer">
      <Paragraph className="footer-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum possimus,
        a perspiciatis deserunt quidem quaerat. Officiis reprehenderit laborum
        cumque aliquid!
      </Paragraph>
      <AppImage imgUrl={iconGrab} imgAlt="logo" />
      <span>All Rights Reserved to Lorem, ipsum © 2022</span>
    </footer>
  );
};
