import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const IntroContainer = styled.div`
  background: #5cdb95;
  color: ${CONSTANTS.colors.persephoneWhite};
  height: 100vh;
  background-size: cover;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

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

export const IntroWrapper = styled.div`
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 50%;
`;

export const IntroMemoji = styled.img`
  height: 250px;

  @media screen and (max-width: 420px) {
    height: 300px;
  }
`;

export const IntroH1 = styled.h1`
  font-family: "League Spartan";
  font-size: 3rem;
  color: ${CONSTANTS.colors.persephoneWhite};

  @media screen and (max-width: 420px) {
    font-size: 2.5rem;
  }
`;
