import React from "react";
import { FooterContainer, FooterWrapper, SocialIcons, SocialIconLink } from "./FooterElements";

import { FaArrowUp } from "react-icons/fa";
import Copyright from "../Copyright";
import Socials from "../Socials";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <Socials />
          <Copyright />
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}
