import React from "react";
import {
  UlStyle,
  AuthorImg,
  AuthorName,
  RightNavBtn,
  RightNavButton,
  RightNavA,
} from "./RightNavElements";
import Resume from "../../assets/Resume.pdf";
import Author from "../../assets/author.png";
import NavLinks from "../NavLinks";
import { saveAs } from "file-saver";
import { sidebarData } from "./data";

export default function RightNav({ open, closeDrawer }) {
  function downloadResume() {
    saveAs(Resume, "matthewbates-resume.pdf");
  }

  return (
    <UlStyle open={open}>
      <div style={{ textAlign: "center" }}>
        <AuthorImg src={Author} alt="image" />
        <AuthorName>Matthew Bates</AuthorName>
      </div>

      {sidebarData.map((item, index) => (
        <div style={{ textAlign: "center" }}>
          <RightNavA
            key={index}
            href={item.href}
            style={{ color: "#F1F2F2", listStyle: "none" }}
          >
            {item.contact}
          </RightNavA>
        </div>
      ))}
      <NavLinks closeDrawer={closeDrawer} title={"Home"} />
      <NavLinks closeDrawer={closeDrawer} title={"About"} />
      <NavLinks closeDrawer={closeDrawer} title={"Skills"} />
      <NavLinks closeDrawer={closeDrawer} title={"Projects"} />
      <NavLinks closeDrawer={closeDrawer} title={"Contact"} />
      <RightNavBtn>
        <RightNavButton onClick={downloadResume}>Resume</RightNavButton>
      </RightNavBtn>
    </UlStyle>
  );
}
