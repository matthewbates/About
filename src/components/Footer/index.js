import React from "react";
import {
  FooterContainer,
  FooterText,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";

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
          {/* <i className="ri-facebook-box-line"></i> */}
          <FaFacebook />
        </SocialIconLink>
        <SocialIconLink>
          <FaInstagram target="_blank" reference="noopener noreferrer" />
        </SocialIconLink>
      </SocialIcons>
      <FooterText>Matthew Bates © {new Date().getFullYear()}</FooterText>
    </FooterContainer>
  );
}
