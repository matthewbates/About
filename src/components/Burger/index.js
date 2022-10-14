import React from "react";
import { StyledBurger } from "./BurgerElements";

export default function Burger({ open, handleOnClick, visible }) {
  return (
    <StyledBurger
      open={open}
      onClick={handleOnClick}
      style={{
        position: "fixed",
        top: "22px",
        right: "25px",
        // opacity: visible ? 1 : 0,
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
