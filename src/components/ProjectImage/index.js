import React, { useState } from "react";
import {
  StyledProjectImage,
  ImageP,
  ImageA,
  ImageText,
} from "./ProjectImageElements";
import "./project.css";

export default function ProjectImage({
  img,
  link,
  style,
  techStack,
  github,
  title,
}) {
  const [hover, setHover] = useState(false);

  const handleToggle = () => {
    setHover(!hover);
  };

  return (
    <StyledProjectImage>
      <img
        src={img}
        className="img flourish"
        alt="image"
        onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}
      />
      <div className="overlay">
        <ImageP style={style}>{techStack}</ImageP>
        <ImageA href={link} target="_blank" rel="noopener noreferrer">
          Demo
        </ImageA>
        <ImageA href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </ImageA>
      </div>
    </StyledProjectImage>
  );
}
