import React from "react";
import { HomeContainer, HomeImage, HomeH1 } from "./HomeElements";
import Typewriter from "typewriter-effect";
import Author from "../../assets/author.png";
import Card from "../../components/Card";

export default function Home() {
  return (
    <HomeContainer id="Home">
      <Card>
        <h1>Hi, I'm Matthew</h1>
        <div className="subtitle-small subtitle">
          <Typewriter
            options={{
              strings: [
                "A passionate, creative technologist",
                "Full-stack software developer",
                "Freelance web designer",
              ],
              autoStart: true,
              loop: true,
              delay: 90,
              deleteSpeed: 30,
            }}
          />
        </div>
      </Card>
    </HomeContainer>
  );
}
