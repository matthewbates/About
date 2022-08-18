import React from "react";
import { StyledBurger } from "./BurgerElements";

export default function Burger({ open, handleOnClick }) {
  return (
    <StyledBurger
      open={open}
      onClick={handleOnClick}
      // style={{ position: "fixed", top: "15px", right: "40px" }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
