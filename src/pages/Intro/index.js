import React from "react";
import { IntroContainer, IntroItems } from "./IntroElements";
import { items } from "./data";

export default function Home({ isClicked }) {
  return (
    <IntroContainer id="Home" isClicked={isClicked}>
      {items.map((item, index) => (
        <IntroItems key={index} style={{ animationDelay: `${200 * index}ms` }}>
          {item}
        </IntroItems>
      ))}
    </IntroContainer>
  );
}
