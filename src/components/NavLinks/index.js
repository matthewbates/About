import React from "react";
import { LinksContainer, LinkScroll } from "./NavLinkElements";
import { sidebarData } from "./data";

export default function NavLinks({ title, classes, closeDrawer }) {
  return (
    <LinkScroll
      to={title}
      spy={true}
      offset={0}
      smooth={true}
      duration={700}
      onClick={closeDrawer}
      className={classes}
      activeClass="active"
    >
      {title}
    </LinkScroll>
  );
}

NavLinks.defaultProps = {
  classes: "",
  title: "title",
  handleClick: () => {},
};
