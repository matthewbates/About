import React from "react";
import { HomeContainer, HomeMemoji } from "./HomeElements";
import TypeWriterEffect from "react-typewriter-effect";
import Card from "../../components/Card";
import memoji from "../../assets/memoji.png";

export default function Home() {
  return (
    <HomeContainer id="Home">
      <Card>
        <HomeMemoji src={memoji} />
        <h1>Hi, I'm Matthew</h1>
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
    </HomeContainer>
  );
}
