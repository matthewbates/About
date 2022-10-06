import React from "react";
import { ImgContainer, ImgH1, ImgWrapper, ImgH3 } from "./SterlingElements";
import sterling from "../../assets/sterling.jpg";
import { useNavigate } from "react-router-dom";
import { FaCentercode } from "react-icons/fa";

export default function Sterling() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <ImgContainer style={{ background: "black" }}>
      <ImgWrapper>
        <ImgH1>This is my buddy, sterling</ImgH1>
        <img
          style={{
            objectFit: "contain",
            height: "70vh",
            width: "70vw",
          }}
          src={sterling}
        />
        <ImgH3 onClick={routeChange}>Go Back</ImgH3>
      </ImgWrapper>
    </ImgContainer>
  );
}
