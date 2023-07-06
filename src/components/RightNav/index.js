import { useRef } from "react";
import {
  RightNavContainer,
  RightNavItems,
  AuthorWrapper,
  AuthorImg,
  AuthorName,
  NavLinksWrapper,
} from "./RightNavElements";
import Author from "../../assets/author.png";
import NavLinks from "../NavLinks";

import { links } from "../Navbar/data";

import { useClickOutside } from "../../utils/helpers";

export default function RightNav({ open, setOpen, closeDrawer }) {
  const rightNavRef = useRef(null);

  useClickOutside(rightNavRef, () => {
    setOpen(false);
  });

  return (
    <RightNavContainer open={open} ref={rightNavRef}>
      <RightNavItems>
        <AuthorWrapper>
          <AuthorImg src={Author} alt="image" />
          <AuthorName>Matthew Bates</AuthorName>
        </AuthorWrapper>
        <NavLinksWrapper>
          {links.map(({ id, name }) => (
            <NavLinks
              key={id}
              title={name}
              id={name}
              closeDrawer={closeDrawer}
            />
          ))}
        </NavLinksWrapper>
      </RightNavItems>
      <div
        style={{
          position: "absolute",
          bottom: "2em",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          src="https://www.codewars.com/users/matthewhcbates/badges/micro"
          alt="author"
        />
      </div>
    </RightNavContainer>
  );
}
