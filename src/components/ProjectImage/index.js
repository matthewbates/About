import React, { useState } from "react";
import { StyledProjectImage } from "./ProjectImageElements";

export default function ProjectImage({ img, link, style, techStack }) {
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(!hover);
  }

  return (
    <StyledProjectImage>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={img}
          className={style}
          alt="application"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        />
        {/* {hover ? techStack : null} */}
      </a>
    </StyledProjectImage>
  );
}
