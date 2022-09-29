import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SocialIcons, SocialIconLink } from "./SocialElements";

export default function Socials() {
  return (
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
  );
}
