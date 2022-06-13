import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HomeContainer = styled.div`
  /* background-color: #faf9f6;
   */
  background-color: ${CONSTANTS.colors.indigo};
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

export const HomeImage = styled.img`
  /* width: 200px;
  height: 200px;
  border-radius: 50%; */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const HomeSubtitle = styled.h3`
  .subtitle {
    transition: 3s;
    letter-spacing: 0.2rem;
  }

  @media screen and (max-width: 1100px) {
    margin: 5px 0px 0px 0px;
  }
`;
