import React, { Fragment } from "react";

import { languagesAndFrameworks, libraries, frontendDevelopment } from "./data";
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsHeader,
  SkillsCard,
  SkillsImage,
  SkillsH3,
} from "./SkillsElements";
import Section from "../../components/Section";

export default function Skills() {
  return (
    <SkillsContainer id="Skills">
      <SkillsHeader>Skills</SkillsHeader>
      <SkillsWrapper>
        <Section>
          <SkillsCard>
            <SkillsH3>Programming Languages</SkillsH3>
            {languagesAndFrameworks.map((item, index) => (
              <Fragment key={index}>
                <SkillsImage className="icon" src={item.img} alt="icon" />
              </Fragment>
            ))}
          </SkillsCard>
        </Section>
        <Section>
          <SkillsCard>
            <SkillsH3>Technical Tools</SkillsH3>
            {libraries.map((item, index) => (
              <Fragment key={index}>
                <SkillsImage className="icon" src={item.img} alt="icon" />
              </Fragment>
            ))}
          </SkillsCard>
        </Section>
        <Section>
          <SkillsCard>
            <SkillsH3>Markup and Frameworks</SkillsH3>
            {frontendDevelopment.map((item, index) => (
              <Fragment key={index}>
                <SkillsImage className="icon" src={item.img} alt="icon" />
              </Fragment>
            ))}
          </SkillsCard>
        </Section>
      </SkillsWrapper>
    </SkillsContainer>
  );
}
