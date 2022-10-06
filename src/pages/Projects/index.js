import React, { useEffect } from "react";
import { ProjectContainer, ProjectHeader } from "./ProjectElements";
import { projectData } from "./data";
import ProjectItem from "../../components/ProjectItem";

export default function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <ProjectContainer id="Projects">
      <ProjectHeader>Recent Projects</ProjectHeader>
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
