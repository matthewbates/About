import React, { useState, useEffect } from "react";
import { FooterContainer, FooterWrapper, Img } from "./FooterElements";
import Copyright from "../Copyright";

export default function Footer() {
  const [logo, setLogo] = useState(
    "https://www.codewars.com/users/matthewhcbates/badges/micro"
  );

  const onResize = (e) => {
    return e.target.innerWidth > 768
      ? setLogo("https://www.codewars.com/users/matthewhcbates/badges/small")
      : setLogo("https://www.codewars.com/users/matthewhcbates/badges/micro");
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
  }, [logo]);

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <Copyright />
          {/* <CreditWrapper>
            <a
              href="https://www.github.com/matthewbates/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Credit>Designed &amp; Built by Matthew Bates</Credit>
            </a>
          </CreditWrapper> */}
          <Img src={logo} />
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}
