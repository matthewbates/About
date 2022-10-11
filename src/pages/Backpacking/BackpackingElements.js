import styled from "styled-components";

export const ImgContainer = styled.div`
  background-color: #000;
  height: 100vh;
  width: 100vw;
`;

export const ImgH1 = styled.h1`
  color: white;
  font-family: "Space Mono";
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const ImgH3 = styled.h3`
  cursor: pointer;
  color: white;
  text-align: center;
  font-family: "Space Mono";

  &:hover {
    text-decoration: 2px underline;
  }
`;

export const ImgWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Img = styled.img`
  object-fit: contain;
  height: 70vh;
  width: 70vw;

  @media screen and (max-width: 768px) {
    height: 65vh;
    width: 65vw;
  }
`;
