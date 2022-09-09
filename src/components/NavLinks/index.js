import React from "react";
import { LinksContainer, LinkScroll } from "./NavLinkElements";

export default function NavLinks({ title, classes, closeDrawer }) {
  return (
    <LinksContainer>
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
    </LinksContainer>
  );
}

NavLinks.defaultProps = {
  classes: "",
  title: "title",
  handleClick: () => {},
};
