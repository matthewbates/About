import { Cross as Hamburger } from "hamburger-react";

import { StyledBurger } from "./BurgerElements";

export default function Burger({ open, toggle, visible }) {
  return (
    <StyledBurger open={open}>
      <Hamburger
        toggled={open}
        toggle={toggle}
        distance="sm"
        duration={0.3}
        direction="left"
        size={32}
      />
    </StyledBurger>
  );
}
