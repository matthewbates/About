import React from "react";
import Card from "../../components/Card";
import { skills, skillsIcons } from "./data";
import { SkillsContainer, SkillsImage, SkillsDiv } from "./SkillsElements";
import { SkillBar } from "react-skillbars";

console.log(skills.map((skill) => skill.name));
export default function Skills() {
  return (
    <SkillsContainer>
      <Card>
        {skillsIcons.map((item, index) => {
          return (
            <SkillsDiv>
              <SkillsImage
                key={item.img}
                src={item.img}
                progress={item.progress.value}
              />
              <progress
                key={index}
                value={item.progress.value}
                max={item.progress.max}
              />
            </SkillsDiv>
          );
        })}
      </Card>
    </SkillsContainer>
  );
}
