import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HomeContainer = styled.div`
  background-color: #faf9f6;
  height: 108vh;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  margin-top: -4rem;

  .subtitle {
    transition: 3s;
    letter-spacing: 0.2rem;
    /* margin: 50px 0px; */
  }
  @media (max-width: 1100px) {
    background-size: cover;
    /* justify-content: flex-start; */
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

export const HomeSubtitle = styled.h3`
  .subtitle {
    transition: 3s;
    letter-spacing: 0.2rem;
    /* margin: 50px 0px; */
  }

  @media screen and (max-width: 1100px) {
    margin: 5px 0px 0px 0px;
  }
`;
