import React from "react";
import { Link } from "react-scroll";
import { LinksContainer } from "./NavLinkElements";

export default function NavLinks({ handleOnClick, title }) {
  return (
    <LinksContainer>
      <span>
        <Link
          to={title}
          spy={true}
          offset={0}
          smooth={true}
          duration={500}
          onClick={handleOnClick}
          //   className={classes}
          activeClass="active"
        >
          {title}
        </Link>
      </span>
    </LinksContainer>
  );
}

NavLinks.defaultProps = {
  classes: "",
  title: "title",
  handleClick: () => {},
};
