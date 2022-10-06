import React from "react";
import { StyledBurger } from "./BurgerElements";

export default function Burger({ open, handleOnClick }) {
  return (
    <StyledBurger
      open={open}
      onClick={handleOnClick}
      style={{ position: "fixed", top: "20px", right: "20px" }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
