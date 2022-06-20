import React from "react";
import {
  FooterContainer,
  FooterText,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import FooterIcon from "../FooterIcon";
import { footerIconData } from "./data";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
import { headerIconData } from "../Header/data";

console.log(footerIconData[0].url);
export default function Footer() {
  return (
    <FooterContainer>
      {/* <FooterIcon
        className="nav-icon"
        url={footerIconData[0].url}
        img={footerIconData[0].img}
        style={footerIconData[0].style}
      /> */}
      <SocialIcons>
        <SocialIconLink
          a
          href="https://www.facebook.com/matthew.bates.794"
          target="_blank"
          reference="noopener noreferrer"
        >
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
