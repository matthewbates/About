import React from "react";
import { UlStyle, AuthorImg, AuthorName } from "./RightNavElements";
import Author from "../../assets/author.png";
import NavLinks from "../NavLinks";

export default function RightNav({ open, closeDrawer }) {
  return (
    <UlStyle open={open}>
      <div style={{ textAlign: "center" }}>
        <AuthorImg src={Author} alt="image" />
        <AuthorName>Matthew Bates</AuthorName>
        <img
          style={{ marginTop: "1rem" }}
          src="https://www.codewars.com/users/matthewhcbates/badges/micro"
          alt="author"
        />
      </div>
      <div
        style={{
          marginTop: "2rem",
          letterSpacing: "1px",
        }}
      >
        <NavLinks closeDrawer={closeDrawer} title={"Home"} />
        <NavLinks closeDrawer={closeDrawer} title={"About"} />
        <NavLinks closeDrawer={closeDrawer} title={"Skills"} />
        <NavLinks closeDrawer={closeDrawer} title={"Projects"} />
        <NavLinks closeDrawer={closeDrawer} title={"Testimonials"} />
        <NavLinks closeDrawer={closeDrawer} title={"Contact"} />
      </div>
    </UlStyle>
  );
}
