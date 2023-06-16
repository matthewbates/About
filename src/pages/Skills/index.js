import React, { Fragment } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

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
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Popover>
                      <Popover.Body>{item.label}</Popover.Body>
                    </Popover>
                  }
                >
                  <SkillsImage className="icon" src={item.img} alt={item.alt} />
                </OverlayTrigger>
              </Fragment>
            ))}
          </SkillsCard>
        </Section>
        <Section>
          <SkillsCard>
            <SkillsH3>Technical Tools</SkillsH3>
            {libraries.map((item, index) => (
              <Fragment key={index}>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Popover>
                      <Popover.Body>{item.label}</Popover.Body>
                    </Popover>
                  }
                >
                  <SkillsImage className="icon" src={item.img} alt="icon" />
                </OverlayTrigger>
              </Fragment>
            ))}
          </SkillsCard>
        </Section>
        <Section>
          <SkillsCard>
            <SkillsH3>Markup and Frameworks</SkillsH3>
            {frontendDevelopment.map((item, index) => (
              <Fragment key={index}>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Popover>
                      <Popover.Body>{item.label}</Popover.Body>
                    </Popover>
                  }
                >
                  <SkillsImage className="icon" src={item.img} alt="icon" />
                </OverlayTrigger>
              </Fragment>
            ))}
          </SkillsCard>
        </Section>
      </SkillsWrapper>
    </SkillsContainer>
  );
}
