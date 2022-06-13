import React from "react";
import { HomeContainer, HomeImage, HomeH1 } from "./HomeElements";
import Typed from "react-typed";
import Author from "../../assets/author.png";
import Card from "../../components/Card";

export default function Home() {
  return (
    <HomeContainer id="Home">
      <Card>
        <h1>Hi, I'm Matthew</h1>
        <div className="subtitle-small subtitle">
          <Typed
            strings={[
              "A passionate, creative technologist",
              "Full-stack software developer",
              "Freelance web designer",
            ]}
            typeSpeed={110}
            backSpeed={35}
            loop
          />
        </div>
      </Card>
    </HomeContainer>
  );
}
