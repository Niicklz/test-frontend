import React from "react";

export const Heading = ({ level = "2", children, className = "heading" }) => {
  const HeadingTag = `h${level}`;

  return <HeadingTag className={className}>{children}</HeadingTag>;
};
