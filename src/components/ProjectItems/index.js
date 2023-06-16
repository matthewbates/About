import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
import Section from "../Section/index.js";

export default function ProjectItems() {
  return (
    <ProjectContainer id="Projects">
      <H2>Projects</H2>
      {projectData.map(
        (
          { img, description, link, techStack, title, github, isReversed },
          index
        ) => (
          <Section key={index}>
            <ProjectItem className="project-item">
              <ProjectWrapper>
                <ProjectImg isReversed={isReversed} src={img} />
                <TextWrapper isReversed={isReversed}>
                  <p style={{ marginBottom: "5px" }}>Featured Project</p>
                  <p>{title}</p>
                  <h6>{description}</h6>
                  <p style={{ marginTop: "1em" }}>{techStack}</p>
                  <LinkWrapper isReversed={isReversed}>
                    <a href={github} target="_blank">
                      <Github />
                    </a>
                    <a href={link} target="_blank">
                      <Site />
                    </a>
                  </LinkWrapper>
                </TextWrapper>
              </ProjectWrapper>
            </ProjectItem>
          </Section>
        )
      )}
    </ProjectContainer>
  );
}
