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

  // const closeDrawer = () => {
  //   setTimeout(() => setOpen(false), 800);
  // };

function closeDrawer() {
  setTimeout() => setOpen(false)
}

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
        <HeaderIcon
          className="nav-icon"
          url={headerIconData[0].url}
          img={headerIconData[0].img}
          style={headerIconData[0].style}
        />
        <HeaderIcon
          className="nav-icon"
          url={headerIconData[1].url}
          img={headerIconData[1].img}
          style={headerIconData[1].style}
        />
        <HeaderIcon
          className="nav-icon"
          url={headerIconData[2].url}
          img={headerIconData[2].img}
          style={headerIconData[2].style}
        />
        <HeaderIcon
          className="nav-icon"
          url={headerIconData[3].url}
          img={headerIconData[3].img}
          style={headerIconData[3].style}
        />
      </StyledContainer>
      <Burger open={open} handleOnClick={handleOnClick} />
      <div
        // fix marginTop inline
        style={{
          marginTop: "-20px",
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
