import React, { useState } from "react";
import { StyledProjectImage, ImageText } from "./ProjectImageElements";
import "./project.css";

export default function ProjectImage({ img, link, style, techStack, github }) {
  const [hover, setHover] = useState(false);

  const handleToggle = () => {
    setHover(!hover);
  };

  return (
    <>
      <StyledProjectImage>
        <img
          src={img}
          className={style}
          alt="image"
          onMouseEnter={handleToggle}
          onMouseLeave={handleToggle}
        />
        <div className="overlay">
          <p>{techStack}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <br />
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </StyledProjectImage>
      <br />
    </>
  );
}
