import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: #000;
`;

export const FlexContainer = styled.div`
  color: #fff;
`;

export const H3 = styled.h3`
  max-width: 420px;
`;

export const Img = styled.img`
  object-fit: contain;
  height: 450px;
  width: 450px;

  @media screen and (max-width: 768px) {
    height: 350px;
    width: 350px;
  }
`;

export const H4 = styled.h4`
  cursor: pointer;

  &:hover {
    text-decoration: 2px solid #fff underline;
  }
`;
