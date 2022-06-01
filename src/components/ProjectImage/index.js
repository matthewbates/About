import React from "react";
import { StyledProjectImage } from "./ProjectImageElements";

export default function ProjectImage({ img, link, style }) {
  return (
    <StyledProjectImage>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} className={style} alt="application" />
      </a>
    </StyledProjectImage>
  );
}
