import React from "react";
import { HeaderLinkScroll } from "./HeaderNavLinkElements";

export default function HeaderNavLinks({ title, classes }) {
  return (
    <HeaderLinkScroll
      to={title}
      spy={true}
      offset={0}
      smooth={true}
      duration={700}
      className={classes}
      activeClass="active"
    >
      {title}
    </HeaderLinkScroll>
  );
}

HeaderNavLinks.defaultProps = {
  classes: "",
  title: "title",
  handleClick: () => {},
};
