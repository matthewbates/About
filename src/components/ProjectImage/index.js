import React, { useState } from "react";
import {
  StyledProjectImage,
  ImageH3,
  ImageP,
  ImageA,
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
        alt="project"
        onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}
      />
      <div className="overlay">
        <ImageH3>{title}</ImageH3>
        <ImageP style={style}>{techStack}</ImageP>
        <span>
          <ImageA href={link} target="_blank" rel="noopener noreferrer">
            Demo{" "}
          </ImageA>
          <ImageA href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </ImageA>
        </span>
      </div>
    </StyledProjectImage>
  );
}
