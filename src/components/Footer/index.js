import React, { useState, useEffect } from "react";
import {
  FooterContainer,
  FooterWrapper,
  Img,
  CreditWrapper,
  Credit,
} from "./FooterElements";
import Copyright from "../Copyright";
import Socials from "../Socials";

export default function Footer() {
  const [logo, setLogo] = useState(
    "https://www.codewars.com/users/matthewhcbates/badges/micro"
  );

  const onResize = (e) => {
    if (e.target.innerWidth > 768) {
      setLogo("https://www.codewars.com/users/matthewhcbates/badges/small");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
  }, [logo]);

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          {/* <Socials /> */}
          <Copyright />
          <CreditWrapper>
            <a
              href="https://www.github.com/matthewbates/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Credit>Designed &amp; Built by Matthew Bates</Credit>
            </a>
          </CreditWrapper>
          <Img src={logo} />
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}
