import React from "react";
import { useInView } from "react-intersection-observer";
import { ProjectListContainer } from "./ProjectItemElements";
import ProjectImage from "../ProjectImage";

export default function ProjectItem({ img, link, style, github, techStack }) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false });

  return (
    <ProjectListContainer>
      <div ref={ref} className={inView ? "listItem animate" : "listItem"}>
        <ProjectImage
          img={img}
          link={link}
          style={style}
          techStack={techStack}
          github={github}
        />
      </div>
    </ProjectListContainer>
  );
}
