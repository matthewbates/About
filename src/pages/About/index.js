import React from "react";
import {
  AboutContainer,
  AboutHeader,
  AboutWrapper,
  AboutA,
  AboutH1,
  AboutP,
  LinkRoute,
} from "./AboutElements";
import ScrollEffect from "../../components/ScrollEffect";

export default function About() {
  return (
    <AboutContainer id="About">
      {/* <ScrollEffect> */}
      <AboutWrapper>
        <AboutHeader>About</AboutHeader>
        <AboutH1>The skinny...</AboutH1>
        <span style={{ fontWeight: "bold" }}>
          <AboutP>
            I'm a software developer living in the small town of{" "}
            <AboutA
              href="https://www.manitouspringsgov.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Manitou Springs, Colorado
            </AboutA>{" "}
            with my Australian Shepherd,{" "}
            <LinkRoute to="/sterling">Sterling</LinkRoute>. I am 31 years old
            and I have been making websites for about 1.5 years.
          </AboutP>
        </span>
        <AboutP>
          I primarily utilize HTML, CSS, and JavaScript. Although constantly
          changing, my focus right now is React.js, Redux, Node, and Mocha.
        </AboutP>
        <AboutP>
          I design, develop, and maintain mobile & tablet-optimized{" "}
          <LinkRoute to="/projects" style={{ color: "white" }}>
            websites
          </LinkRoute>{" "}
          for my clients, and I'm searching to get my foot in the door with a
          tech company as a front-end developer.
        </AboutP>
        <AboutH1>A little more...</AboutH1>
        <AboutP>
          I've been intrigued with web development for a long time, so much so
          that I decided to leave my job in master data to pursue my dream of
          becoming a software engineer. It's a space of constant improvement and
          exciting & new technology. I'm always using technology to solve my
          life's probems and ambitions.
        </AboutP>
        {/* <AboutP>
          I live in a really cool town called Manitou Springs that sits at the
          foot of Pikes Peak with my Australian Shepherd,{" "}
          <LinkRoute to="/sterling">Sterling</LinkRoute>.
        </AboutP> */}
        <AboutP style={{ marginBottom: "3rem" }}>
          I have a few hobbies. I enjoy{" "}
          <LinkRoute to="/backpacking" style={{ color: "white" }}>
            backpacking
          </LinkRoute>,{" "}
          fly fishing, and skiing/snowboarding. I{" "}
          <AboutA
            href="https://www.medium.com/@matthewhcbates"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            blog
          </AboutA>{" "}
          regularly, as well. I am an avid griller and I have been known to make
          great tri-tip fajitas, steaks, as well as my personal twist on the
          jalepeno popper.
        </AboutP>
      </AboutWrapper>
    </AboutContainer>
  );
}
