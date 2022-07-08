import React from "react";
import {
  FooterContainer,
  FooterText,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIconLink
          a
          href="https://www.facebook.com/matthew.bates.794"
          target="_blank"
          reference="noopener noreferrer"
        >
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink
          a
          href="https://www.instagram.com/mhcbates/"
          target="_blank"
          reference="noopener noreferrer"
        >
          <FaInstagram target="_blank" reference="noopener noreferrer" />
        </SocialIconLink>
      </SocialIcons>
      <FooterText>© {new Date().getFullYear()} Matthew Bates</FooterText>
    </FooterContainer>
  );
}
