import React from "react";
import { Container, FlexContainer, H3, Img, H4 } from "./BackpackingElements";
import harvard from "../../assets/harvard.jpg";
import { useNavigate } from "react-router-dom";

export default function Backpacking() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <Container style={{ background: "black" }}>
      <FlexContainer>
        <H3>Mt. Harvard, Colorado's 2nd tallest mountain</H3>
        <Img src={harvard} loading="lazy" />
        <H4 onClick={routeChange}>Go Back</H4>
      </FlexContainer>
    </Container>
  );
}
