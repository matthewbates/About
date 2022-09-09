import React from "react";
import {
  HeaderLinksContainer,
  HeaderLinkScroll,
} from "./HeaderNavLinkElements";

export default function HeaderNavLinks({ title, classes }) {
  return (
    <HeaderLinksContainer>
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
    </HeaderLinksContainer>
  );
}

HeaderNavLinks.defaultProps = {
  classes: "",
  title: "title",
  handleClick: () => {},
};
