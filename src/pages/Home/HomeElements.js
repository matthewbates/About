import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-size: cover;

  .text-container {
    padding: 50px;
    text-align: left;
    margin-left: 250px;
    border-radius: 12px;
    border: 1px solid black;
    align-items: center;
  }
  .subtitle {
    transition: 3s;
    letter-spacing: 0.2rem;
    margin: 50px 0px;
  }
  @media (max-width: 768px) {
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
