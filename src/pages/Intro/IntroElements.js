import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const IntroContainer = styled.div`
  background: #0049b7;
  color: ${CONSTANTS.colors.persephoneWhite};
  height: 110vh;
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
      /* margin: 50px 0px; */
    }
    .subtitle {
      margin: 5px 0px 0px 0px;
    }
  }
`;

export const IntroMemoji = styled.img`
  height: 400px;

  @media screen and (max-width: 420px) {
    height: 300px;
  }
`;

export const IntroH1 = styled.h1`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 3rem;
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
    font-size: 2.5rem;
  }
`;
