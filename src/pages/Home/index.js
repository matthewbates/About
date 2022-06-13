import React from "react";
import { HomeContainer, HomeImage, HomeH1 } from "./HomeElements";
import TypeWriterEffect from "react-typewriter-effect";
import Author from "../../assets/author.png";
import Card from "../../components/Card";

export default function Home() {
  return (
    <HomeContainer id="Home">
      <Card>
        <h1>Hi, I'm Matthew</h1>
        <div className="subtitle-small subtitle">
          <TypeWriterEffect
            multiText={[
              "A passionate, creative technologist",
              "Full-stack software developer",
              "Freelance web designer",
            ]}
            multiTextDelay={2500}
            textStyle={{ fontSize: "0.9rem", textAlign: "center" }}
            cursorColor="#fff"
            multiTextLoop
          />
        </div>
      </Card>
    </HomeContainer>
  );
}
