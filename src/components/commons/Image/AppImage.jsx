import React from "react";

export const AppImage = ({ imgUrl, imgAlt }) => {
  return <img loading="lazy" src={imgUrl} alt={imgAlt} />;
};
