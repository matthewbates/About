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
import gsap from "gsap";
import HeaderNavLinks from "../HeaderNavLinks";
import { debounce } from "../../utils/helpers";
import CONSTANTS from "../../utils/constants";

export default function Header({ width, position }) {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleOnClick = () => setOpen(!open);
  const closeDrawer = () => {
    setTimeout(() => setOpen(false), 800);
  };

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setOpen(false);
    }
  };

  const handleOnScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    return () => window.removeEventListener("scroll", handleOnScroll);
  }, [prevScrollPos, visible, handleOnScroll]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

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
      delay: 2.1,
      opacity: 0,
      duration: 1.5,
      ease: "bounce",
      stagger: 0.35,
    });
  }, []);

  return (
    <StyledContainer
      style={{
        position: "fixed",
        height: "80px",
        width: "100%",
        background: `${CONSTANTS.colors.persephoneWhite}`,
        top: visible ? "0" : "-80px",
        transition: "top 0.4s",
      }}
    >
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
        <Burger open={open} handleOnClick={handleOnClick} visible={visible} />
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
