import { useIsFocusVisible } from "@mui/material";
import React from "react";
import { StyledBurger } from "./BurgerElements";

export default function Burger({ open, handleOnClick, visible }) {
  return (
    <StyledBurger
      open={open}
      onClick={handleOnClick}
      visible={visible}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
