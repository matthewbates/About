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

    .project-links {
      display: flex;
      align-items: center;
      position: relative;
      margin-top: 10px;
      margin-left: -10px;
      color: ${CONSTANTS.colors.persephoneWhite};
      a {
        padding: 10px;
        &.external {
        }
        svg {
          color: white;
          width: 28px;
          height: 28px;
        }

        &:hover {
          transform: translateY(4px);
          color: #5cdb95;
        }
      }
    }

    @media screen and (max-width: 420px) {
      font-size: 12px;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ImageH3 = styled.h3`
  font-family: "Lato";
`;

export const ImageP = styled.p`
  color: ${CONSTANTS.colors.persephoneWhite};
  margin-top: 0.5rem;

  @media screen and (max-width: 390px) {
    font-size: 8px;
  }
`;

export const ImageA = styled.a`
  color: ${CONSTANTS.colors.persephoneWhite};
  text-decoration: none;
  letter-spacing: 2px;
  font-family: "Poppins";
  width: 70px;

  &:hover {
    font-style: italic;
  }

  @media screen and (max-width: 390px) {
    font-size: 8px;
  }
`;
