import React, { useState, useEffect } from "react";
import { IntroContainer, IntroButton, TransitionStyles } from "./IntroElements";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TypeWriterEffect from "react-typewriter-effect";
import Resume from "../../assets/Resume.pdf";
import { saveAs } from "file-saver";
import { ItemDescription } from "semantic-ui-react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const downloadResume = () => {
    saveAs(Resume, "matthewbates-resume.pdf");
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 3500);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my Name is </h1>;
  const two = <h2>Matthew Bates</h2>;
  const three = <h2>I build things for the web.</h2>;
  const four = (
    <>
      <p>I'm a software developer at </p>
      <a href="https://www.google.com" />
    </>
  );

  const items = [one, two, three, four];

  return (
    <IntroContainer id="Home">
      <div
        style={{
          marginLeft: "2rem",
          marginTop: "3rem",
        }}
      >
        <h1>Hi, my name is</h1>
        <h2 className="required">Matthew </h2>
        <h2>I build things for the web.</h2>
        <h3
          style={{
            fontSize: "18px",
            marginTop: "10px",
            fontFamily: "Space Mono",
            color: "white",
          }}
        >
          <p>I'm a:</p>
        </h3>
        <TypeWriterEffect
          multiText={[
            "front-end software developer with full-stack experience",
            "creative, passionate technologist",
            "freelance web designer",
          ]}
          multiTextDelay={2500}
          textStyle={{
            fontSize: "20px",
            fontFamily: "Space Mono",
            color: "#5cdb95",
            marginTop: "10px",
            flexWrap: "wrap",
            maxWidth: "260px",
          }}
          cursorColor="#fff"
          typeSpeed={80}
          deleteSpeed={4000}
          multiTextLoop
        />
        <IntroButton onClick={downloadResume}>Resume</IntroButton>
      </div>
      {/* <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup">
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup> */}
    </IntroContainer>
  );
}
