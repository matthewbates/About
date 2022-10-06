import React from "react";
import { IntroContainer, IntroMemoji, IntroH1 } from "./IntroElements";
import TypeWriterEffect from "react-typewriter-effect";
import Card from "../../components/Card";
import memoji from "../../assets/memoji.png";

export default function Home() {
  return (
    <IntroContainer id="Home">
      <Card
        style={{
          marginTop: "3rem",
          background: "white",
          justifyContent: "left",
          textAlign: "left",
          alignItems: "left",
        }}
      >
        <IntroMemoji src={memoji} />
        <IntroH1>Hi, I'm Matthew</IntroH1>
        <div style={{ marginTop: "2rem" }} className="subtitle-small subtitle">
          <TypeWriterEffect
            multiText={[
              "Front-end software developer",
              "A creative, passionate technologist",
              "Freelance web designer",
            ]}
            multiTextDelay={2500}
            textStyle={{ fontSize: "1.2rem", textAlign: "center" }}
            cursorColor="#fff"
            typeSpeed={80}
            multiTextLoop
          />
        </div>
      </Card>
    </IntroContainer>
  );
}
