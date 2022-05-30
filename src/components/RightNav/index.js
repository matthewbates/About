import React from "react";
import {
  UlStyle,
  AuthorImg,
  AuthorName,
  IconContainer,
  BtnLink,
} from "./RightNavElements";
import Author from "../../assets/author.png";
import NavLinks from "../NavLinks";

export default function RightNav({ open, closeDrawer }) {
  function handleOnClick() {
    window.open(
      "https://drive.google.com/file/d/1qYi2dwSUK6IfIsdeftnkp3V4xoASUgmn/view?usp=sharing"
    );
  }

  // interface RightNavProps {
  //   open: boolean;
  //   closeDrawer: () => void;
  // }

  return (
    <>
      <UlStyle open={open}>
        <AuthorImg src={Author} alt="author image" />
        <AuthorName>Matthew Bates</AuthorName>
        <IconContainer>
          <i className="fa-solid fa-house-chimney"></i> Manitou Springs, CO
          <br />
          <i className="fa-solid fa-phone"></i> (713) 504-4436
          <br />
          <i className="fa-solid fa-envelope"></i> mhcb@tutanota.com
          <NavLinks closeDrawer={closeDrawer} title={"Home"} />
          <NavLinks closeDrawer={closeDrawer} title={"About"} />
          <NavLinks closeDrawer={closeDrawer} title={"Projects"} />
          <NavLinks closeDrawer={closeDrawer} title={"Contact"} />
          <br />
          <BtnLink onClick={handleOnClick}>View CV</BtnLink>
        </IconContainer>
      </UlStyle>
    </>
  );
}
