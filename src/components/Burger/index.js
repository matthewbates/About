import { useIsFocusVisible } from "@mui/material";
import React from "react";
import { StyledBurger } from "./BurgerElements";

export default function Burger({ open, toggle, visible }) {
  return (
    <StyledBurger open={open} onClick={toggle} visible={visible}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
