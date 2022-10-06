import React from "react";
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
  target,
  rel,
}) {
  return (
    <StyledProjectImage>
      <img src={img} className="img flourish" alt="project" />
      <div style={{ gap: "1rem" }} className="overlay">
        <ImageH3>{title}</ImageH3>
        <ImageP style={style}>{techStack}</ImageP>
        <span>
          <ImageA href={link} target="_blank" rel={rel}>
            Link{" "}
          </ImageA>
          <ImageA href={github} target="_blank" rel={rel}>
            GitHub
          </ImageA>
        </span>
      </div>
    </StyledProjectImage>
  );
}
