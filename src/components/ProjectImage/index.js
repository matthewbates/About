import React from "react";
import { StyledProjectImage, ImageH3, ImageP } from "./ProjectImageElements";
import "./project.css";
import Github from "../Icons/github";
import External from "../Icons/external";
import { projectData } from "../../pages/Projects/data";
import { badgeUnstyledClasses } from "@mui/base";

export default function ProjectImage({
  img,
  link,
  style,
  techStack,
  github,
  title,
  badges,
}) {
  console.log(badges);
  return (
    <StyledProjectImage>
      <img src={img} className="img flourish" alt="project" />
      <div className="overlay">
        <ImageH3>{title}</ImageH3>
        <ImageP style={style}>{techStack}</ImageP>
        {/* <img src={badges} /> */}
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github name="GitHub" />
            </a>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            <External name="External" />
          </a>
        </div>
      </div>
    </StyledProjectImage>
  );
}
