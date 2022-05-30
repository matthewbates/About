import React from "react";
import { ProjectContainer } from "./ProjectElements";
import { projectData } from "./data";

console.log(projectData);

export default function Projects({ img, link, github }) {
  console.log(img);
  return (
    <ProjectContainer id="Projects">
      <h3>Recent Projects</h3>
    </ProjectContainer>
  );
}
