import React, { Fragment, useState, useEffect } from "react";
import {
  StyledContainer,
  StyledWrapper,
  HeaderNav,
  HeaderLinksSpan,
  NavLinksWrapper,
} from "./HeaderElements";
import { navbarIconData, navbarLinks } from "./data";
import HeaderIcon from "../HeaderIcon";
import Burger from "../Burger";
import RightNav from "../RightNav";
import NavLinks from "../NavLinks";
import gsap from "gsap";
import HeaderNavLinks from "../HeaderNavLinks";

export default function Header({ width, position }) {
  const [open, setOpen] = useState(false);
  // const [desktop, setDesktop] = useState(window.innerWidth < 768);

  const handleOnClick = () => setOpen(!open);
  const closeDrawer = () => {
    setTimeout(() => setOpen(false), 800);
  };
  // const updateMedia = () => setDesktop(window.innerWidth < 768);

  useEffect(() => {
    gsap.from(".nav-icon", {
      y: 100,
      delay: 0.5,
      opacity: 0,
      duration: 2,
      ease: "back",
      stagger: 0.35,
    });
  }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", updateMedia);
  //   return () => window.removeEventListener("resize", updateMedia);
  // }, []);

  return (
    <StyledContainer width={width} position={position}>
      <StyledWrapper>
        {navbarIconData.map((item, index) => (
          <HeaderIcon
            key={index}
            className="nav-icon"
            url={item.url}
            img={item.img}
            style={item.style}
          />
        ))}
      </StyledWrapper>
      <>
        <Burger open={open} handleOnClick={handleOnClick} />
        <div
          style={{
            top: 0,
            right: 0,
            position: "fixed",
            zIndex: open ? 1 : -1,
          }}
        >
          <RightNav open={open} closeDrawer={closeDrawer} />
        </div>
      </>
      <NavLinksWrapper>
        {navbarLinks.map((item, index) => (
          <HeaderNavLinks key={index} title={item.to} />
        ))}
      </NavLinksWrapper>
    </StyledContainer>
  );
}

Header.defaultProps = {
  width: "100%",
  position: "fixed",
};
