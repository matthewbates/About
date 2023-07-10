import React from "react";

import {
  ProjectImageContainer,
  ProjectImageWrapper,
  Image,
  ImageH3,
  ImageP,
} from "./ProjectImageElements";
import Github from "../Icons/github";
import External from "../Icons/external";

export default function ProjectImage({
  img,
  link,
  style,
  techStack,
  github,
  title,
}) {
  return (
    <ProjectImageContainer>
      <Image src={img} alt="project" />
      <ProjectImageWrapper className="overlay">
        <ImageH3>{title}</ImageH3>
        <ImageP style={style}>{techStack}</ImageP>
        <div className="project-links">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github name="GitHub" />
            </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="external"
          >
            <External name="External" />
          </a>
        </div>
      </ProjectImageWrapper>
    </ProjectImageContainer>
  );
}
