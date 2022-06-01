import React from "react";
import { HomeContainer, HomeH1 } from "./HomeElements";
import { BtnLink } from "../../components/Button";
import Card from "../../components/Card";
import { saveAs } from "file-saver";
import Resume from "../../assets/Resume/Resume.pdf";

export default function Home() {
  function downloadResume() {
    saveAs(Resume, "matthewbates-resume.pdf");
  }

  return (
    <HomeContainer id="Home">
      <Card>
        <h1>Hi, I'm Matthew</h1>
        <div className="subtitle-small subtitle">
          <h3>A passionate, creative technologist</h3>
          <BtnLink onClick={downloadResume} fontBig="true">
            Download CV
          </BtnLink>
        </div>
      </Card>
    </HomeContainer>
  );
}
