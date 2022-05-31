import React from "react";
import { useInView } from "react-intersection-observer";
import { ProjectListContainer } from "./ProjectItemElements";
import ProjectImage from "../ProjectImage";
import ProjectInfo from "../ProjectInfo";

export default function ProjectItem({ img, link, title, github, techStack }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <ProjectListContainer>
      <span ref={ref} className={inView ? "listItem animate" : "listItem"}>
        <ProjectImage img={img} link={link} />
        <ProjectInfo title={title} github={github} techStack={techStack}/>
      </span>
    </ProjectListContainer>
  );
}
