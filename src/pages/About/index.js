import React, { useState } from "react";
import {
  AboutContainer,
  AboutHeader,
  AboutH1,
  SkillsH3,
} from "./AboutElements";
import Card from "../../components/Card";
import { about } from "./data";
import ScrollEffect from "../../components/ScrollEffect";
import { Link } from "react-scroll";

export default function About() {
  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(!hover);
  }

  return (
    <AboutContainer id="About">
      <ScrollEffect>
        <AboutHeader>About</AboutHeader>
        <div
          style={{
            maxWidth: "420px",
            textAlign: "justify",
            color: "white",
            letterSpacing: "1.5px",
            fontSize: "18px",
          }}
        >
          <h2>Hey, I'm Matthew.</h2>
          <h3>The skinny...</h3>
          <p>
            I'm a software developer living in Mantiou Springs, Colorado. I'm 31
            years young and I've been making websites for about 1.5 years
          </p>
          <p>
            I primarily utilize HTML, CSS, and JavaScript. Although constantly
            changing, my focus right now is React.js, Node, Express, and Mocha.
          </p>
          <p>
            I build mobile/tablet optimized
            <a href="/websites" style={{ textDecoration: "none" }}>
              websites
            </a>
            for my clients, and I'm searching to get my foot in the door with a
            tech company as a front-end developer.
          </p>
          <h3>A little more...</h3>
          <p>
            I've been intrigured with web development for a long time. So much
            so that I decided to leave my job in finance to pursue my dream of
            becoming a software engineer. It's a space of constant improvement
            and exciting & new technology. I'm always using technology to solve
            my life's probems and ambitions.
          </p>
          <p>
            I live in a really cool town called Manitou Springs that sits at the
            foot of Pikes Peak with my Australian Shepherd, Sterling.
          </p>
          <p>
            I have a few hobbies. I enjoy backpacking and fly fishing (when it's
            the right time of year). In the winter you can find me on the
            slopes, skiing or snowboarding. I'm currently beertending at a
            new-ish taproom in Old Colorado City.
          </p>
        </div>
        <Card>
          <AboutHeader>
            <SkillsH3>{about[0].aboutOne}</SkillsH3>
          </AboutHeader>
          <SkillsH3>{about[1].aboutTwo}</SkillsH3>
        </Card>
      </ScrollEffect>
    </AboutContainer>
  );
}
