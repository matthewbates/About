import React from "react";
// import { Link } from "react-scroll";
import { LinksContainer, LinkScroll } from "./NavLinkElements";

export default function NavLinks({ handleOnClick, title, classes, closeDrawer }) {
  return (
    <LinksContainer>
      <span>
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
      </span>
    </LinksContainer>
  );
}

NavLinks.defaultProps = {
  classes: "",
  title: "title",
  handleClick: () => {},
};
