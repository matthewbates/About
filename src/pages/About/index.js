import React from "react";
import { AboutContainer } from "./AboutElements";
import Card from "../../components/Card";
import { languages, learning } from "./data";

export default function About() {
  return (
    <AboutContainer id="About">
      <Card classes="about-card">
        <div className="header">
          <h2 className="title">ABOUT</h2>
          <h3 className="subtitle">
            Hi there! I am a software developer & content creator residing in
            Manitou Springs, CO
          </h3>
        </div>

        <div className="section-img">
          {languages.map((language, index) => {
            return <img key={index} src={language.icon} alt={language.name} />;
          })}
        </div>
        <h3 className="subtitle">I'm currently learning:</h3>
        <img src={learning[0].icon} alt={learning[0].name} />
        <img src={learning[1].icon} alt={learning[1].name} />
        <div className="section">
          <h3>
            Even before my transition into tech, it was wildly apparent I had a
            passion for enterprise software technology. Making things more
            accessable through software development & setting new standards that
            could be used worldwide is what drove me to get into the field.
          </h3>
        </div>
      </Card>
    </AboutContainer>
  );
}
