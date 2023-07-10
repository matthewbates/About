import { Squash as Hamburger } from "hamburger-react";

import { StyledBurger } from "./BurgerElements";

export default function Burger({ open, toggle, visible }) {
  return (
    <StyledBurger open={open}>
      <Hamburger
        toggled={open}
        toggle={toggle}
        hideOutline={false}
        size={28}
        direction="left"
      />
    </StyledBurger>
  );
}
