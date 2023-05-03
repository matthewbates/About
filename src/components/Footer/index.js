import React, { useState, useEffect } from "react";
import { FooterContainer, FooterWrapper, Img } from "./FooterElements";
import Copyright from "../Copyright";

export default function Footer() {
  const [logo, setLogo] = useState("");

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
          <Img src={logo} />
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}
