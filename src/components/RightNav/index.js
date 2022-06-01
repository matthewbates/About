import React from "react";
import {
  UlStyle,
  AuthorImg,
  AuthorName,
  IconContainer,
  ChimneyIcon,
  PhoneIcon,
  EmailIcon,
} from "./RightNavElements";
import Author from "../../assets/author.png";
import NavLinks from "../NavLinks";

export default function RightNav({ open, closeDrawer }) {
  function handleOnClick() {
    window.open(
      "https://drive.google.com/file/d/1qYi2dwSUK6IfIsdeftnkp3V4xoASUgmn/view?usp=sharing"
    );
  }

  return (
    <UlStyle open={open}>
      <AuthorImg src={Author} alt="author image" />
      <AuthorName>Matthew Bates</AuthorName>
      <IconContainer>
        <ChimneyIcon className="fa-solid fa-house-chimney"></ChimneyIcon>{" "}
        Manitou Springs, CO
        <br />
        <PhoneIcon className="fa-solid fa-phone"></PhoneIcon> (713) 504-4436
        <br />
        <EmailIcon className="fa-solid fa-envelope"></EmailIcon>{" "}
        mhcb@tutanota.com
        <NavLinks closeDrawer={closeDrawer} title={"Home"} />
        <NavLinks closeDrawer={closeDrawer} title={"About"} />
        <NavLinks closeDrawer={closeDrawer} title={"Projects"} />
        <NavLinks closeDrawer={closeDrawer} title={"Contact"} />
      </IconContainer>
    </UlStyle>
  );
}
