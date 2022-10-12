import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const IntroContainer = styled.section`
  display: flex;
  -webkit-box-align: center;
  justify-content: center;
  flex-direction: column;
  background: #05386b;
  align-items: flex-start;
  min-height: 100vh;
  flex-wrap: wrap;

  @media screen and (min-width: 480px) and (max-width: 768px) {
    padding-top: 10vh;
  }

  .required::after {
    content: "&&";
    color: #5cdb95;
  }

  h1 {
    font-size: 18px;
    margin: 0 0 10px;
    color: ${CONSTANTS.colors.persephoneWhite};
    font-family: "Space Mono";

    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h2 {
    font-family: "Inter Tight";
    line-height: 1.1;
    display: block;
    color: ${CONSTANTS.colors.blueGrotto};
    font-size: 60px;

    @media screen and (max-width: 768px) {
      font-size: 36px;
      max-width: 340px;
    }
  }

  h3 {
    font-family: "Lato";
  }

  p {
    color: ${CONSTANTS.colors.persephoneWhite};
    font-family: "Space Mono";
    font-weight: 400;
  }
`;

export const IntroButton = styled.button`
  cursor: pointer;
  margin: 10% auto 0px;
  width: max-content;
  border: 1.5px solid #5cdb95;
  color: ${CONSTANTS.colors.persephoneWhite};
  background-color: transparent;
  padding: 12px 30px;
  margin-top: 1rem;
  font-family: "Space Mono";

  &:hover {
    color: #05386b;
    background: ${CONSTANTS.colors.persephoneWhite};
    transition: all 300ms ease-in-out;
  }
`;
