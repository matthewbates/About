import React from "react";
import { Container, FlexContainer, H3, Img, H4 } from "./SterlingElements";
import sterling from "../../assets/sterling.jpg";
import { useNavigate } from "react-router-dom";

export default function Sterling() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <Container>
      <FlexContainer>
        <H3>This is my buddy, Sterling</H3>
        <Img src={sterling} />
        <H4 onClick={routeChange}>Go Back</H4>
      </FlexContainer>
    </Container>
  );
}
