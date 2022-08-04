import React from "react";
import Card from "../../components/Card";
import { skillsIcons, skillsLearning } from "./data";
import {
  SkillsContainer,
  SkillsDiv,
  SkillsH1,
  SkillsH2,
  SkillsArticle,
  SkillsImage,
} from "./SkillsElements";

export default function Skills() {
  return (
    <SkillsContainer id="Skills">
      <Card>
        <SkillsDiv>
          <SkillsH1>Technologies</SkillsH1>
          {skillsIcons.map((item, index) => {
            return (
              <>
                <SkillsArticle>
                  <SkillsImage src={item.img} alt="skills-icon" />
                  <SkillsH2>{item.name}</SkillsH2>
                </SkillsArticle>
              </>
            );
          })}
          {/* <SkillsH1>Currently Learning</SkillsH1>
          {skillsLearning.map((item, index) => {
            return (
              <SkillsArticle>
                <SkillsImage src={item.img} alt="skills-icon" />
                <SkillsH2>{item.name}</SkillsH2>
              </SkillsArticle>
            );
          })} */}
        </SkillsDiv>
      </Card>
    </SkillsContainer>
  );
}
