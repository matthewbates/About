import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { LoaderContainer } from "./LoaderElements";

export default function Loader() {
  return (
    <LoaderContainer>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </LoaderContainer>
  );
}
