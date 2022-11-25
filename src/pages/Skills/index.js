import React, { useState, useEffect } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  const toggleMouseEnter = (e) => {
    setIsHovered(true);
  };

  const toggleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <SkillsContainer id="Skills">
      <SkillsHeader>Skills</SkillsHeader>
      <SkillsWrapper>
        <Section>
          <SkillsCard>
            <SkillsH3>Programming Languages</SkillsH3>
            {languagesAndFrameworks.map((item, index) => (
              <>
                <SkillsImage
                  onMouseEnter={toggleMouseEnter}
                  onMouseLeave={toggleMouseLeave}
                  key={index}
                  className="icon"
                  src={item.img}
                  alt="icon"
                />
                {/* {isHovered && <h3>{item.name}</h3>} */}
              </>
            ))}
          </SkillsCard>
        </Section>
        <Section>
          <SkillsCard>
            <SkillsH3>Technical Tools</SkillsH3>
            {libraries.map((item, index) => (
              <SkillsImage
                key={index}
                className="icon"
                src={item.img}
                alt="icon"
              />
            ))}
          </SkillsCard>
        </Section>
        <Section>
          <SkillsCard>
            <SkillsH3>Markup and Frameworks</SkillsH3>
            {frontendDevelopment.map((item, index) => (
              <SkillsImage
                key={index}
                className="icon"
                src={item.img}
                alt="icon"
              />
            ))}
          </SkillsCard>
        </Section>
      </SkillsWrapper>
    </SkillsContainer>
  );
}
