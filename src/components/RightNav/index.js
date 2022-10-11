import React from "react";
import { UlStyle, AuthorImg, AuthorName } from "./RightNavElements";
import Resume from "../../assets/Resume.pdf";
import Author from "../../assets/author.png";
import NavLinks from "../NavLinks";
import { saveAs } from "file-saver";

export default function RightNav({ open, closeDrawer }) {
  return (
    <UlStyle open={open}>
      <div style={{ textAlign: "center" }}>
        <AuthorImg src={Author} alt="image" />
        <AuthorName>Matthew Bates</AuthorName>
      </div>
      <div style={{ marginTop: "2rem", letterSpacing: "2px" }}>
        <NavLinks closeDrawer={closeDrawer} title={"Home"} />
        <NavLinks closeDrawer={closeDrawer} title={"About"} />
        <NavLinks closeDrawer={closeDrawer} title={"Skills"} />
        <NavLinks closeDrawer={closeDrawer} title={"Projects"} />
        <NavLinks closeDrawer={closeDrawer} title={"Contact"} />
      </div>
    </UlStyle>
  );
}
