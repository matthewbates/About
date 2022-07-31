import React from "react";
import Card from "../../components/Card";
import { skillsIcons } from "./data";
import {
  SkillsContainer,
  SkillsProgress,
  SkillsImage,
  SkillsDiv,
} from "./SkillsElements";

export default function Skills() {
  return (
    <SkillsContainer>
      {/* <C/ard> */}
      <SkillsDiv>
        {skillsIcons.map((item, index) => {
          return (
            <>
              <SkillsImage key={item.img} src={item.img} />
              <SkillsProgress
                key={index}
                value={item.progress.value}
                max={item.progress.max}
              />
            </>
          );
        })}
      </SkillsDiv>
      {/* </Card> */}
    </SkillsContainer>
  );
}
