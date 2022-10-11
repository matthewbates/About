import React from "react";
import {
  ImgContainer,
  ImgH1,
  ImgWrapper,
  ImgH3,
  Img,
} from "./BackpackingElements";
import harvard from "../../assets/harvard.jpg";
import { useNavigate } from "react-router-dom";

export default function Backpacking() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <ImgContainer style={{ background: "black" }}>
      <ImgWrapper>
        <ImgH1>Mt. Harvard, Colorado's 2nd tallest mountain</ImgH1>
        <Img src={harvard} loading="lazy" />
        <ImgH3 onClick={routeChange}>Go Back</ImgH3>
      </ImgWrapper>
    </ImgContainer>
  );
}
