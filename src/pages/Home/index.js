import React from "react";
import { HomeContainer, HomeH1 } from "./HomeElements";
import Card from "../../components/Card";
import gsap from "gsap";

export default function Home() {
  return (
    <HomeContainer id="Home">
      <Card classes="text-container">
        <h1>Matthew Bates</h1>
        <h2>Software Developer</h2>
        <div className="subtitle-small subtitle">
          <h3>A creative, passionate technologist</h3>
        </div>
      </Card>
    </HomeContainer>
  );
}
