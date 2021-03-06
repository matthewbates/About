import React from "react";
import { HomeContainer, HomeH1, HomeMemoji, ScrollButton } from "./HomeElements";
import TypeWriterEffect from "react-typewriter-effect";
import Card from "../../components/Card";
import memoji from "../../assets/memoji.png";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <HomeContainer id="Home">
      <Card>
        <HomeMemoji src={memoji} />
        <HomeH1>Hi, I'm Matthew</HomeH1>
        <div className="subtitle-small subtitle">
          <TypeWriterEffect
            multiText={[
              "A creative, passionate technologist",
              "Full-stack software developer",
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
      <ScrollButton
        to="About"
        spy={true}
        offset={0}
        smooth={true}
        duration={700}
      >
        <div />
        <div />
        <div />
      </ScrollButton>
    </HomeContainer>
  );
}
