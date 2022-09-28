import React, { useState } from "react";
import {
  AboutContainer,
  AboutHeader,
  AboutH1,
  SkillsH3,
} from "./AboutElements";
import Card from "../../components/Card";
import { about } from "./data";
import ScrollEffect from "../../components/ScrollEffect";

export default function About() {
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(!hover);
  }

  return (
    <AboutContainer id="About">
      <ScrollEffect>
        <Card>
          <AboutHeader>
            <AboutH1>About Me</AboutH1>
            <SkillsH3>{about[0].aboutOne}</SkillsH3>
          </AboutHeader>
          <SkillsH3>{about[1].aboutTwo}</SkillsH3>
        </Card>
      </ScrollEffect>
    </AboutContainer>
  );
}
