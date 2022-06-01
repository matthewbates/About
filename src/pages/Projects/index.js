import React from "react";
import { ProjectContainer, ProjectH1 } from "./ProjectElements";
import { projectData } from "./data";
import ProjectItem from "../../components/ProjectItem";

export default function Projects() {
  return (
    <ProjectContainer id="Projects">
      <ProjectH1>Recent Projects</ProjectH1>
      {projectData.map(({ img, link, techStack, style, title, github }) => (
        <ProjectItem
          key={img}
          img={img}
          link={link}
          techStack={techStack}
          style={style}
          title={title}
          github={github}
        />
      ))}
    </ProjectContainer>
  );
}
