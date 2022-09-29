import React, { useEffect } from "react";
import gsap from "gsap";

import { languagesAndFrameworks, libraries, frontendDevelopment } from "./data";
import {
  SkillsContainer,
  SkillsCard,
  SkillsImage,
  SkillsH3,
} from "./SkillsElements";

export default function Skills() {
  return (
    <>
      <SkillsContainer>
        <SkillsCard style={{ marginTop: "4rem" }}>
          <SkillsH3>Languages & Frameworks</SkillsH3>
          {languagesAndFrameworks.map((item, index) => (
            <>
              <SkillsImage src={item.img} alt="" />
            </>
          ))}
        </SkillsCard>
        <SkillsCard>
          <SkillsH3>Libraries & Source Control</SkillsH3>
          {libraries.map((item, index) => (
            <SkillsImage key={index} src={item.img} alt="" />
          ))}
        </SkillsCard>
        <SkillsCard style={{ marginBottom: "4rem" }}>
          <SkillsH3>Data Markup & Extensions</SkillsH3>
          {frontendDevelopment.map((item, index) => (
            <SkillsImage src={item.img} alt="" />
          ))}
        </SkillsCard>
      </SkillsContainer>
    </>
  );
}
