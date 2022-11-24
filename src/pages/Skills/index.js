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

export default function Skills({ isClicked }) {
  return (
    <>
      <SkillsContainer id="Skills" isClicked={isClicked}>
        <SkillsHeader>Skills</SkillsHeader>
        <SkillsWrapper>
          <Section>
            <SkillsCard>
              <SkillsH3>Programming Languages</SkillsH3>
              {languagesAndFrameworks.map((item, index) => (
                <Fragment key={index}>
                  <SkillsImage src={item.img} alt="" />
                </Fragment>
              ))}
            </SkillsCard>
          </Section>
          <Section>
            <SkillsCard>
              <SkillsH3>Technical Tools</SkillsH3>
              {libraries.map((item, index) => (
                <Fragment key={index}>
                  <SkillsImage src={item.img} alt="" />
                </Fragment>
              ))}
            </SkillsCard>
          </Section>
          <Section>
            <SkillsCard style={{ marginBottom: "4rem" }}>
              <SkillsH3>Markup and Frameworks</SkillsH3>
              {frontendDevelopment.map((item, index) => (
                <Fragment key={index}>
                  <SkillsImage src={item.img} alt="" />
                </Fragment>
              ))}
            </SkillsCard>
          </Section>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
}
