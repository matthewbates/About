import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  StyledWrapper,
  RightNavWrapper,
  NavLinksWrapper,
} from "./NavbarElements";
import { navbarIconData, navbarLinks } from "./data";
import HeaderIcon from "../HeaderIcon";
import Burger from "../Burger";
import RightNav from "../RightNav";
import gsap from "gsap";
import HeaderNavLinks from "../HeaderNavLinks";
import { debounce } from "../../utils/helpers";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleRightNav = () => {
    setOpen(!open);
  };
  const closeDrawer = () => {
    setTimeout(() => setOpen(false), 800);
  };

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    gsap.timeline().from(".nav-icon", {
      y: 100,
      delay: 2,
      opacity: 0,
      duration: 2,
      ease: "back",
      stagger: 0.25,
    });
    gsap.timeline().from(".links", {
      x: 100,
      delay: 2.8,
      opacity: 0,
      duration: 1.5,
      ease: "bounce",
      stagger: 0.35,
    });
  }, []);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledContainer visible={visible}>
      <StyledWrapper open={open}>
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
      <Burger open={open} toggle={toggleRightNav} visible={visible} />
      <RightNavWrapper>
        <RightNav open={open} setOpen={setOpen} closeDrawer={closeDrawer} />
      </RightNavWrapper>
      <NavLinksWrapper className="links">
        {navbarLinks.map((item, index) => (
          <HeaderNavLinks key={index} title={item.to} />
        ))}
      </NavLinksWrapper>
    </StyledContainer>
  );
}
