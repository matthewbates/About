import React from "react";
import { HomeContainer, HomeH1 } from "./HomeElements";
import Card from "../../components/Card";

export default function Home() {
  return (
    <HomeContainer id="Home">
      <Card>
        <h1>Hi, I'm Matthew</h1>
        <div className="subtitle-small subtitle">
          <h3>A passionate, creative technologist</h3>
        </div>
      </Card>
    </HomeContainer>
  );
}
