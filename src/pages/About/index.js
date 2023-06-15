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
import Section from "../../components/Section";

export default function About({ isClicked }) {
  return (
    <AboutContainer id="About" isClicked={isClicked}>
      <AboutWrapper>
        <AboutHeader>About</AboutHeader>
        <AboutH1>In general...</AboutH1>
        <Section>
          <AboutP>
            I'm a software engineer living in Denver, CO with my Australian
            Shepherd,{" "}
            <LinkRoute to="/sterling" style={{ color: "#5cdb95" }}>
              Sterling.
            </LinkRoute>
          </AboutP>
        </Section>
        <Section>
          <AboutP>
            I primarily utilize the MERN stack along with various databases and
            SaaS's, such as Firebase. Although constantly changing, my focus
            right now is in React.
          </AboutP>
        </Section>
        <Section>
          <AboutP>
            I've been intrigued with web development for a long time, so much so
            that I decided to alter my profession to pursue a career in tech.
            It's a space of constant improvement and exciting & new technology.
            I'm always using technology to solve my life's problems and
            ambitions.
          </AboutP>
        </Section>
        <AboutH1>A little more...</AboutH1>
        <Section>
          <AboutP>
            I design, develop, test, and delploy mobile & tablet-optimized{" "}
            <AboutA
              href="https://soft-lebkuchen-2188b1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#5cdb95" }}
            >
              websites
            </AboutA>{" "}
            for my clients, and I work as an application developer for the
            University of Denver full-time.
          </AboutP>
        </Section>
        <Section>
          <AboutP style={{ marginBottom: "3rem" }}>
            I have a few hobbies. I enjoy{" "}
            <LinkRoute to="/backpacking" style={{ color: "#5cdb95" }}>
              backpacking
            </LinkRoute>
            , fly fishing, and skiing/snowboarding. I{" "}
            <AboutA
              href="https://www.medium.com/@matthewhcbates"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#5cdb95" }}
            >
              blog
            </AboutA>{" "}
            regularly, as well.
          </AboutP>
        </Section>
      </AboutWrapper>
    </AboutContainer>
  );
}
