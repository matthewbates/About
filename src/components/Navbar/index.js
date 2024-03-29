import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  StyledWrapper,
  NavLinksWrapper,
} from "./NavbarElements";
import { navbarIconData, links } from "./data";
import HeaderIcon from "../HeaderIcon";
import Burger from "../Burger";
import RightNav from "../RightNav";
import gsap from "gsap";
import HeaderNavLinks from "../HeaderNavLinks";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const toggleRightNav = () => {
    setOpen(!open);
  };
  const closeDrawer = () => {
    setTimeout(() => setOpen(false), 800);
  };

  const handleResize = (e) => {
    if (e.target.innerWidth > 768) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   gsap.timeline().from(".nav-icon", {
  //     x: 100,
  //     delay: 2,
  //     opacity: 0,
  //     duration: 2,
  //     ease: "back",
  //     stagger: 0.25,
  //   });
  //   gsap.timeline().from(".links", {
  //     x: 100,
  //     delay: 2.8,
  //     opacity: 0,
  //     duration: 1.5,
  //     ease: "bounce",
  //     stagger: 0.35,
  //   });
  // }, []);

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
        {navbarIconData.map(({ url, img, style }, index) => (
          <HeaderIcon
            key={index}
            className="nav-icon"
            url={url}
            img={img}
            style={style}
          />
        ))}
      </StyledWrapper>
      <Burger open={open} toggle={toggleRightNav} visible={visible} />
      <RightNav open={open} setOpen={setOpen} closeDrawer={closeDrawer} />
      <NavLinksWrapper className="links">
        {links.map(({ name }, index) => (
          <HeaderNavLinks className="links" key={index} title={name} />
        ))}
      </NavLinksWrapper>
    </StyledContainer>
  );
}
