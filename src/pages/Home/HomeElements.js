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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: inherit;
  cursor: pointer;
  border: 2px solid ${CONSTANTS.colors.persephoneWhite};
  padding: 6px 6px;
`;
