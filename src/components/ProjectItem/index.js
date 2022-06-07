import React from "react";
import { useInView } from "react-intersection-observer";
import { ProjectListContainer } from "./ProjectItemElements";
import ProjectImage from "../ProjectImage";
import ProjectInfo from "../ProjectInfo";

export default function ProjectItem({
  img,
  link,
  title,
  style,
  github,
  techStack,
}) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false });

  return (
    <ProjectListContainer>
      <div ref={ref} className={inView ? "listItem animate" : "listItem"}>
        <ProjectInfo title={title} github={github} techStack={techStack} />
        <br />
        <ProjectImage
          img={img}
          link={link}
          style={style}
          techStack={techStack}
        />
      </div>
    </ProjectListContainer>
  );
}
