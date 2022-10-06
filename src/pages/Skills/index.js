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

export default function Skills() {
  return (
    <>
      <SkillsContainer id="Skills">
        <SkillsWrapper>
          <SkillsHeader>Skills</SkillsHeader>
          <SkillsCard style={{ marginTop: "4rem" }}>
            <SkillsH3>Languages & Frameworks</SkillsH3>
            {languagesAndFrameworks.map((item, index) => (
              <Fragment key={index}>
                <SkillsImage src={item.img} alt="" />
              </Fragment>
            ))}
          </SkillsCard>
          <SkillsCard>
            <SkillsH3>Libraries & Source Control</SkillsH3>
            {libraries.map((item, index) => (
              <Fragment key={index}>
                <SkillsImage src={item.img} alt="" />
              </Fragment>
            ))}
          </SkillsCard>
          <SkillsCard style={{ marginBottom: "4rem" }}>
            <SkillsH3>Data Markup & Extensions</SkillsH3>
            {frontendDevelopment.map((item, index) => (
              <Fragment key={index}>
                <SkillsImage src={item.img} alt="" />
              </Fragment>
            ))}
          </SkillsCard>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
}
