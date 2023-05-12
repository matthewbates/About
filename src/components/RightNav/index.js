import { useState, useRef } from "react";
import {
  UlStyle,
  RightNavContainer,
  AuthorImg,
  AuthorName,
} from "./RightNavElements";
import Author from "../../assets/author.png";
import NavLinks from "../NavLinks";

import { useClickOutside } from "../../utils/helpers";

export default function RightNav({ open, setOpen, closeDrawer }) {
  const rightNavRef = useRef(null);

  useClickOutside(rightNavRef, () => {
    setOpen(false);
  });

  return (
    <UlStyle open={open} ref={rightNavRef}>
      <RightNavContainer>
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
      </RightNavContainer>
    </UlStyle>
  );
}
