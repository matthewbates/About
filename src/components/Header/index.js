import React, { useState } from "react";
import { StyledHeader } from "./HeaderElements";
import { headerIconData } from "./data";
import HeaderIcon from "../HeaderIcon";
import Burger from "../Burger";

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleOnClick() {
    setOpen(!open);
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
    </StyledHeader>
  );
}
