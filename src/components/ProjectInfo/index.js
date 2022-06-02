import React from "react";
import { ProjectInfoContainer } from "./ProjectInfoElements";
import Card from "../Card";

export default function ProjectInfo({ title, github, techStack }) {
  return (
    <ProjectInfoContainer>
      <Card classes="app-text">
        <h3 className="title-margin">{title}</h3>
        <p className="p_margin">{techStack}</p>
        <div>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <p className="p_margin hover">GitHub</p>
          </a>
        </div>
      </Card>
    </ProjectInfoContainer>
  );
}
