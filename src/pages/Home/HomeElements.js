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

  .header-container {
    margin-top: 5rem;
  }

  .h1 {
    letter-spacing: 0.2rem;
    font-size: 24px;
  }

  .subtitle {
    color: ${CONSTANTS.colors.persephoneWhite};
    transition: 3s;
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
    border-bottom: 5px solid #06a8ff;
    border-right: 5px solid #06a8ff;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
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
