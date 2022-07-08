import React from "react";
import {
  UlStyle,
  AuthorImg,
  AuthorName,
  IconContainer,
  ChimneyIcon,
  PhoneIcon,
  RightNavButton,
} from "./RightNavElements";
import Resume from "../../assets/Resume.pdf";
import Author from "../../assets/author.png";
import NavLinks from "../NavLinks";
import { saveAs } from "file-saver";

export default function RightNav({ open, closeDrawer }) {
  function downloadResume() {
    saveAs(Resume, "matthewbates-resume.pdf");
  }

  return (
    <UlStyle open={open}>
      <AuthorImg src={Author} alt="author image" />
      <AuthorName>Matthew Bates</AuthorName>
      <IconContainer>
        <ChimneyIcon className="fa-solid fa-house-chimney"></ChimneyIcon>{" "}
        Manitou Springs, CO
        <br />
        <PhoneIcon className="fa-solid fa-phone"></PhoneIcon>{" "}
        <a href="tel:+17135044436" style={{ color: "#f1f2f2" }}>
          713-504-4436
        </a>
        <br />
        <NavLinks closeDrawer={closeDrawer} title={"Home"} />
        <NavLinks closeDrawer={closeDrawer} title={"About"} />
        <NavLinks closeDrawer={closeDrawer} title={"Projects"} />
        <NavLinks closeDrawer={closeDrawer} title={"Contact"} />
        <RightNavButton onClick={downloadResume}>Resume</RightNavButton>
      </IconContainer>
    </UlStyle>
  );
}
