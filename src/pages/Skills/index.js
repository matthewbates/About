import React from "react";
import Card from "../../components/Card";
import { skills, skillsIcons } from "./data";
import { SkillsContainer, SkillsImage } from "./SkillsElements";
import { SkillBar } from "react-skillbars";

console.log(skills.map((skill) => skill.name));
export default function Skills() {
  return (
    <SkillsContainer>
      <Card>
        {skillsIcons.map((item, index) => {
          return (
            <>
              <SkillsImage
                key={index}
                src={item.img}
                progress={item.progress.value}
              />
              <progress value={item.progress.value} max={item.progress.max} />
            </>
          );
        })}
      </Card>
    </SkillsContainer>
  );
}
