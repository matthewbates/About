import React, { useState } from "react";
import { StyledHeader } from "./HeaderElements";
import { headerIconData } from "./data";
import HeaderIcon from "../HeaderIcon";
import Burger from "../Burger";
import RightNav from "../RightNav";

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleOnClick() {
    setOpen(!open);
  }

  function closeDrawer() {
    setTimeout(() => setOpen(false, 660));
  }

  return (
    <StyledHeader>
      <div style={{ display: "flex", alignItems: "center" }}>
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
      </div>
      <Burger
        open={open}
        handleOnClick={handleOnClick}
        className="nav-burger"
      />
      <div
      // fix marginTop inline
        style={{ marginTop: "-20px", top: 0, right: 0, position: "fixed", zIndex: open ? 1 : -1 }}
      >
        <RightNav open={open} closeDrawer={closeDrawer} />
      </div>
    </StyledHeader>
  );
}
