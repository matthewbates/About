import React from "react";
import {
  UlStyle,
  AuthorImg,
  AuthorName,
  IconContainer,
} from "./RightNavElements";
import Author from "../../assets/author.png";

export default function RightNav({ open, closeDrawer }) {
  return (
    <UlStyle open={open}>
      <AuthorImg src={Author} alt="author image" />
      <AuthorName>Matthew Bates</AuthorName>
      <IconContainer>
        <i className="fa-solid fa-house-chimney"></i> Manitou Springs, CO
        <br />
        <i className="fa-solid fa-phone"></i> (713) 504-4436
        <br />
        <i className="fa-solid fa-envelope"></i> mhcb@tutanota.com
      </IconContainer>
    </UlStyle>
  );
}
