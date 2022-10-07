import React from "react";
import {
  IntroContainer,
  IntroWrapper,
  IntroMemoji,
  IntroH1,
} from "./IntroElements";
import TypeWriterEffect from "react-typewriter-effect";
import Card from "../../components/Card";
import memoji from "../../assets/memoji.png";

export default function Home() {
  return (
    <IntroContainer id="Home">
      <IntroWrapper>
        <IntroH1>Hi, I'm Matthew</IntroH1>
        <IntroMemoji src={memoji} />
        <div
          style={{
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "300px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="subtitle-small subtitle"
        >
          <TypeWriterEffect
            multiText={[
              "Front-end software developer",
              "A creative, passionate technologist",
              "Freelance web designer",
            ]}
            multiTextDelay={2500}
            textStyle={{
              fontSize: "20px",
              textAlign: "center",
              fontFamily: "Space Mono",
              color: "#05386b",
            }}
            cursorColor="#fff"
            typeSpeed={80}
            multiTextLoop
          />
        </div>
      </IntroWrapper>
    </IntroContainer>
  );
}
