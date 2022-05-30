import React from "react";
import { HomeContainer, HomeH1 } from "./HomeElements";
import Card from "../../components/Card";

export default function Home() {
  return (
    <HomeContainer id="Home">
      <div classes="text-container">
        <h1>Matthew Bates</h1>
        <h3>Software Developer</h3>
        <div className="subtitle-small subtitle">
          <h5>A creative, passionate technologist</h5>
        </div>
      </div>
    </HomeContainer>
  );
}
