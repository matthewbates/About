import React from "react";
import { StyledProjectImage } from "./ProjectImageElements";

export default function ProjectImage({ img, link }) {
  return (
    <StyledProjectImage>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          style={{ height: "300px", width: "300px" }}
          src={img}
          alt="application"
        />
      </a>
    </StyledProjectImage>
  );
}
