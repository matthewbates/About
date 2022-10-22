import React, { useState, useEffect } from "react";
import { IntroContainer, IntroButton } from "./IntroElements";
import TypeWriterEffect from "react-typewriter-effect";
import Resume from "../../assets/Resume.pdf";
import { saveAs } from "file-saver";

export default function Home({ isClicked }) {
  const [isMounted, setIsMounted] = useState(false);

  const downloadResume = () => {
    saveAs(Resume, "matthewbates-resume.pdf");
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 3500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <IntroContainer id="Home" isClicked={isClicked}>
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
    </IntroContainer>
  );
}
