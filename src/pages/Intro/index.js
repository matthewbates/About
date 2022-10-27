import React, { useState, useEffect } from "react";
import { IntroContainer, IntroButton } from "./IntroElements";
import TypeWriterEffect from "react-typewriter-effect";
// import Resume from "../../assets/Resume.pdf";
// import { saveAs } from "file-saver";
import { items } from "./data";

export default function Home({ isClicked }) {
  const [isMounted, setIsMounted] = useState(false);

  // const downloadResume = () => {
  //   saveAs(Resume, "matthewbates-resume.pdf");
  // };

  // useEffect(() => {
  //   const timeout = setTimeout(() => setIsMounted(true), 3500);
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <IntroContainer id="Home" isClicked={isClicked}>
      <div
        style={{
          marginRight: "2rem",
          marginTop: "3rem",
        }}
      >
        <ul style={{ marginLeft: "2rem", marginTop: "2rem" }}>
          {items.map((item, index) => (
            <li
              className="fade-list-style"
              style={{ animationDelay: `${250 * index}ms` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </IntroContainer>
  );
}
