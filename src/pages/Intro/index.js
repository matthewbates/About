import React from "react";
import { IntroContainer, IntroWrapper, IntroLi } from "./IntroElements";
import { items } from "./data";
import { IntroButton } from "./IntroElements";

export default function Home({ isClicked }) {
  return (
    <IntroContainer id="Home" isClicked={isClicked}>
      <IntroWrapper>
        <ul style={{ marginLeft: "2rem", marginTop: "2rem" }}>
          {items.map((item, index) => (
            <IntroLi key={index} style={{ animationDelay: `${250 * index}ms` }}>
              {item}
            </IntroLi>
          ))}
        </ul>
      </IntroWrapper>
      <IntroButton>Resume</IntroButton>
    </IntroContainer>
  );
}
