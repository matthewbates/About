import React, { useEffect } from "react";
import { ProjectContainer, ProjectHeader } from "./ProjectElements";
import { projectData } from "./data";
import ProjectItem from "../../components/ProjectItem";

export default function Projects({ isClicked }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <ProjectContainer id="Projects" isClicked={isClicked}>
      <ProjectHeader>Featured Projects</ProjectHeader>
      {projectData.map((item, index) => (
        <ProjectItem
          key={index}
          img={item.img}
          link={item.link}
          techStack={item.techStack}
          style={item.style}
          title={item.title}
          github={item.github}
          badges={item.badges}
        />
      ))}
    </ProjectContainer>
  );
}
