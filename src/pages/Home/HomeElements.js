import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const HomeContainer = styled.div`
  background-color: ${CONSTANTS.colors.navyBlue};
  color: ${CONSTANTS.colors.persephoneWhite};
  height: 108vh;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  margin-top: -4rem;

  .subtitle {
    color: ${CONSTANTS.colors.persephoneWhite};
    letter-spacing: 0.2rem;
  }
  @media (max-width: 1100px) {
    background-size: cover;

    .text-container {
      width: 100vw;
      height: auto;
      padding: 20px;
      border-left: none;
      border-right: none;
      border-radius: 0px;
      margin: 50px 0px;
    }
    .subtitle {
      margin: 5px 0px 0px 0px;
    }
  }
`;

export const HomeMemoji = styled.img`
  height: 300px;

  @media screen and (max-width: 420px) {
    height: 200px;
  }
`;

export const ScrollButton = styled(Link)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  div {
    display: block;
    width: 22px;
    height: 22px;
    border-bottom: 5px solid ${CONSTANTS.colors.persephoneWhite};
    border-right: 5px solid ${CONSTANTS.colors.persephoneWhite};
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
    &:nth-child(2) {
      animation-delay: -0.2s;
    }
    &:nth-child(3) {
      animation-delay: -0.4s;
    }
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-15px, -15px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(15px, 15px);
    }
  }
`;

export const HomeH1 = styled.h1`
  font-family: "Poppins";
  font-size: 3em;
  font-weight: 700;
  color: ${CONSTANTS.colors.persephoneWhite};
  text-shadow: 1px 1px 1px ${CONSTANTS.colors.steel},
    1px 2px 1px ${CONSTANTS.colors.steel}, 1px 3px 1px ${CONSTANTS.colors.steel},
    1px 4px 1px ${CONSTANTS.colors.steel}, 1px 5px 1px ${CONSTANTS.colors.steel},
    1px 6px 1px ${CONSTANTS.colors.steel}, 1px 7px 1px ${CONSTANTS.colors.steel},
    1px 8px 1px ${CONSTANTS.colors.steel}, 1px 9px 1px ${CONSTANTS.colors.steel},
    1px 10px 1px ${CONSTANTS.colors.steel}, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);

  @media screen and (max-width: 420px) {
    font-size: 2.2rem;
  }
`;
