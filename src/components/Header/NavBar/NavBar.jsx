import React, { useEffect, useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

import "./NavBar.css";
import { AppImage } from "../../commons/Image/AppImage";
import iconGrab from "../../../assets/header/icongrab.png";
import { useWindowSize } from "../../../utils/useWindowsSize";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth] = useWindowSize();
  const toggleBodyOverflow = () => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  };
  useEffect(() => {
    toggleBodyOverflow();
  }, [isMenuOpen]);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (windowWidth > 792 && isMenuOpen) {
      setIsMenuOpen(false);
      toggleBodyOverflow();
    }
  }, [windowWidth]);
  const menuOptions = [
    {
      name: "lorem ipsum",
      link: "#",
    },
    {
      name: "lorem ipsum",
      link: "#",
    },
    {
      name: "lorem ipsum",
      link: "#",
    },
    {
      name: "lorem ipsum",
      link: "#",
    },
    {
      name: "lorem ipsum",
      link: "#",
    },
    {
      name: "lorem ipsum",
      link: "#",
    },
  ];

  return (
    <nav className="navbar">
      <figure className="logo-container">
        <AppImage imgUrl={iconGrab} imgAlt="logo" />
      </figure>
      <button className="burger-menu-container" onClick={handleMenu}>
        {isMenuOpen ? (
          <XMarkIcon className="close-icon" />
        ) : (
          <Bars3Icon className="burguer-icon" />
        )}
      </button>
      <ul className={`menu-container ${isMenuOpen ? "open" : "closed"}`}>
        {menuOptions.map((name, index) => (
          <li key={index}>
            <a href={name.link} onClick={() => setIsMenuOpen(false)}>
              {name.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
