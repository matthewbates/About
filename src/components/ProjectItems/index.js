import React from "react";

import Github from "../Icons/github.js";
import Site from "../Icons/external.js";

import { projectData } from "../../pages/Projects/data";

import {
  ProjectContainer,
  H2,
  ProjectItem,
  ProjectWrapper,
  ProjectImg,
  TextWrapper,
  LinkWrapper,
} from "./ProjectItemElements";

export default function ProjectItems() {
  return (
    <ProjectContainer id="Projects">
      <H2>Recent Projects</H2>
      {projectData.map(
        (
          { img, description, link, techStack, title, github, isReversed },
          index
        ) => (
          <ProjectItem>
            <ProjectWrapper key={index}>
              <ProjectImg isReversed={isReversed} src={img} />
              <TextWrapper isReversed={isReversed}>
                <p style={{ marginBottom: "5px" }}>Featured Project</p>
                <p>{title}</p>
                <h6>{description}</h6>
                <p style={{ marginTop: "1em" }}>{techStack}</p>
                <LinkWrapper
                  isReversed={isReversed}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "50px",
                    gap: "10px",
                  }}
                >
                  <a href={github}>
                    <Github />
                  </a>
                  <a href={link}>
                    <Site />
                  </a>
                </LinkWrapper>
              </TextWrapper>
            </ProjectWrapper>
          </ProjectItem>
        )
      )}
    </ProjectContainer>
  );
}
