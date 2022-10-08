import React from "react";
import { IntroContainer, IntroButton } from "./IntroElements";
import TypeWriterEffect from "react-typewriter-effect";
import Resume from "../../assets/Resume.pdf";
import { saveAs } from "file-saver";

export default function Home() {
  const downloadResume = () => {
    saveAs(Resume, "matthewbates-resume.pdf");
  };

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
          multiTextLoop
        />
        <IntroButton onClick={downloadResume}>Resume</IntroButton>
      </div>
    </IntroContainer>
  );
}
