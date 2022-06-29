import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const StyledProjectImage = styled.div`
  position: relative;

  &:hover .overlay {
    height: 100%;
  }

  .flourish {
    max-height: 400px;
  }

  .img {
    display: block;
    width: 100%;
    max-width: 650px;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 0%;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    font-family: "Quicksand", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 30px;
    font-size: 16px;

    @media screen and (max-width: 420px) {
      font-size: 12px;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ImageH2 = styled.h2`
  justify-content: space-between;
  font-family: "Quicksand" sans-serif;
  text-decoration: underline;
`;

export const ImageP = styled.p`
  color: ${CONSTANTS.colors.persephoneWhite};
  /* border: 2px solid blue;
  box-shadow: 1px 1px 0 1px;
  padding: 12px 15px 8px; */
`;

export const ImageA = styled.a`
  color: ${CONSTANTS.colors.persephoneWhite};
`;
