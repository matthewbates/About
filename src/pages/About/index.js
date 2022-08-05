import React, { useState } from "react";
import {
  AboutContainer,
  AboutHeader,
  AboutSection,
  AboutH1,
  SkillsImageContainer,
  SkillsImage,
  SkillsH3,
} from "./AboutElements";
import Card from "../../components/Card";
import { languages, learning, about } from "./data";

export default function About() {
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(!hover);
  }

  return (
    <AboutContainer id="About">
      <Card>
        <AboutHeader>
          <AboutH1>About Me</AboutH1>
          <SkillsH3>{about[0].aboutOne}</SkillsH3>
        </AboutHeader>
        <SkillsH3>{about[1].aboutTwo}</SkillsH3>
      </Card>
    </AboutContainer>
  );
}
