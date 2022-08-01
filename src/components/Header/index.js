import React, { useState, useEffect } from "react";
import { StyledHeader, StyledContainer } from "./HeaderElements";
import { headerIconData } from "./data";
import HeaderIcon from "../HeaderIcon";
import Burger from "../Burger";
import RightNav from "../RightNav";
import gsap from "gsap";

export default function Header({ width, position }) {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => setOpen(!open);

  const closeDrawer = () => {
    setTimeout(() => setOpen(false), 800);
  };

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
      </StyledContainer>
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
    </StyledHeader>
  );
}

Header.defaultProps = {
  width: "100%",
  position: "fixed",
};
