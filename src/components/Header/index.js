import React, { Fragment, useState, useEffect } from "react";
import { StyledHeader, StyledContainer, HeaderNav } from "./HeaderElements";
import { headerIconData } from "./data";
import HeaderIcon from "../HeaderIcon";
import Burger from "../Burger";
import RightNav from "../RightNav";
import NavLinks from "../NavLinks";
import gsap from "gsap";
import HeaderNavLinks from "../HeaderNavLinks";

export default function Header({ width, position }) {
  const [open, setOpen] = useState(false);
  const [desktop, setDesktop] = useState(window.innerWidth < 768);

  const handleOnClick = () => setOpen(!open);
  const closeDrawer = () => {
    setTimeout(() => setOpen(false), 800);
  };
  const updateMedia = () => setDesktop(window.innerWidth < 768);

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

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <StyledHeader width={width} position={position}>
      <StyledContainer>
        {headerIconData.map((item, index) => {
          return (
            <HeaderIcon
              key={index}
              className="nav-icon"
              url={item.url}
              img={item.img}
              style={item.style}
            />
          );
        })}

        {desktop ? (
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
        ) : (
          <span
            style={{
              display: "flex",
              backgroundColor: "black",
              color: "black",
              justifyContent: "space-between",
              marginLeft: "5rem",
            }}
          >
            <HeaderNavLinks title={"Home"} />
            <HeaderNavLinks title={"About"} />
            <HeaderNavLinks title={"Skills"} />
            <HeaderNavLinks title={"Projects"} />
            <HeaderNavLinks title={"Contact"} />
          </span>
        )}
      </StyledContainer>
    </StyledHeader>
  );
}

Header.defaultProps = {
  width: "100%",
  position: "fixed",
};
