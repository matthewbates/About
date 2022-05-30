import React from "react";
import JavaScript from "../../assets/stack/javascript.png";
import NodeJS from "../../assets/stack/nodejs.png";
import ReactJS from "../../assets/stack/react.png";
import Redux from "../../assets/stack/redux.png";
import { AboutContainer } from "./AboutElements";
import Card from "../../components/Card";

export default function About() {
  return (
    <AboutContainer id="About">
      <div classes="about-card">
        <div className="header">
          <h3 className="title">ABOUT</h3>
          <h4 className="subtitle">
            Hello! I am a remote software developer enjoying the mountains of
            Colorado.
          </h4>
        </div>

        <div className="section-img">
          <img src={JavaScript} alt="javascript" />
          <img src={NodeJS} alt="nodejs" />
          <img src={ReactJS} alt="react" />
          <img src={Redux} alt="redux" />
        </div>

        <div className="section">
          <h4>
            Currently utilizing JavaScript & Python for web development. My most
            recent applications have included React, MaterialUI, Redux,
            Elasticsearch, TypeScript, Node.js, Esri, & MongoDB.
          </h4>
        </div>
      </div>
    </AboutContainer>
  );
}
