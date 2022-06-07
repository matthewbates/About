import React from "react";
import { HomeContainer, HomeImage, HomeH1 } from "./HomeElements";
import Author from "../../assets/author.png";
import Pexels from "../../assets/pexels.jpg";
import Card from "../../components/Card";

export default function Home() {
  return (
    <HomeContainer id="Home">
      {/* <HomeImage src={Pexels} alt="author-img"></HomeImage> */}
      <Card>
        <h1>Hi, I'm Matthew</h1>
        <div className="subtitle-small subtitle">
          <h3>A passionate, creative technologist</h3>
        </div>
      </Card>
    </HomeContainer>
  );
}
