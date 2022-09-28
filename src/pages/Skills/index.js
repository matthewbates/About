import React from "react";
import Card from "../../components/Card";
import {
  languagesAndFrameworks,
  libraries,
  frontendDevelopment,
  sourceControl,
} from "./data";
import {
  SkillsContainer,
  SkillsCard,
  SkillsImage,
  SkillsH3,
  SkillsHeader,
} from "./SkillsElements";

export default function Skills() {
  return (
    <>
      {/* <SkillsHeader>Skills</SkillsHeader> */}
      <SkillsContainer>
        <SkillsCard>
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
            <SkillsImage src={item.img} alt="" />
          ))}
        </SkillsCard>
        <SkillsCard>
          <SkillsH3>Data Markup & Extensions</SkillsH3>
          {frontendDevelopment.map((item, index) => (
            <SkillsImage src={item.img} alt="" />
          ))}
        </SkillsCard>
      </SkillsContainer>
    </>
  );
}
