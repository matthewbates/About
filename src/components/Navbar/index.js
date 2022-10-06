import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  StyledWrapper,
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

  const handleOnClick = () => setOpen(!open);
  const closeDrawer = () => {
    setTimeout(() => setOpen(false), 800);
  };

  useEffect(() => {
    gsap.from(".nav-icon", {
      y: 100,
      delay: 0.8,
      opacity: 0,
      duration: 2,
      ease: "back",
      stagger: 0.25,
    });
  }, []);

  useEffect(() => {
    gsap.from(".links", {
      x: 100,
      delay: 2.2,
      opacity: 0,
      duration: 1.5,
      stagger: 0.35,
    });
  }, []);

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
      <NavLinksWrapper className="links">
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
