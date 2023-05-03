import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const IntroContainer = styled.section`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  background: #05386b;
  flex-wrap: wrap;

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
    font-family: "Arial";
    line-height: 1.1;
    color: ${CONSTANTS.colors.blueGrotto};
    font-size: 60px;
    font-weight: bold;
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
    font-size: 18px;
  }
`;

export const IntroItems = styled.div`
  display: flex;
  margin-left: 2em;
  opacity: 0;
  animation-name: fadein;
  animation-duration: 500ms;
  animation-fill-mode: forwards;

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 380px;
  }
`;

export const IntroButton = styled.button`
  cursor: pointer;
  border: 1.5px solid #5cdb95;
  color: ${CONSTANTS.colors.persephoneWhite};
  background-color: transparent;
  padding: 0.8em;
  margin-top: 1rem;
  font-family: "Space Mono";

  &:hover {
    color: #05386b;
    background: ${CONSTANTS.colors.persephoneWhite};
    transition: all 300ms ease-in-out;
  }
`;
