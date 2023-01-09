import React from "react";
import { StyledBurger } from "./BurgerElements";

export default function Burger({ open, handleOnClick, visible }) {
  return (
    // reusable burger component
    <StyledBurger
      open={open}
      onClick={handleOnClick}
      style={{
        position: "fixed",
        top: "28px",
        right: "30px",
        opacity: visible ? 1 : 0,
      }}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
