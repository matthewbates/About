import React from "react";
import { StyledBurger } from "./BurgerElements";

export default function Burger({ open, handleOnClick }) {
  return (
    <StyledBurger open={open} onClick={handleOnClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
