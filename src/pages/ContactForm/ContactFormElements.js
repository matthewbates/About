import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const FormSection = styled.section`
  background: ${CONSTANTS.colors.babyBlue};
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  color: #f1f2f2;
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-right: 6rem;

  @media screen and (max-width: 1200px) {
    margin: 1rem auto;
  }

  @media screen and (max-width: 1007px) {
    width: 80%;
  }
`;

export const FormContainerDiv = styled.div`
  width: 40%;
  margin: 0 10% 16% 0;

  @media screen and (max-width: 1200) {
    margin: 0 5% 0 0;
    width: 45%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 3% 0;
  }
`;

export const FormContainerText = styled.p`
  font-family: "Roboto Flex", sans-serif;
`;

export const FormContainerDivRight = styled.div`
  width: 40%;
  margin: 0 10% 14% 0;
  /* found onl line 526 */
  margin: 0 0 0 10%;

  @media screen and (max-width: 1007px) {
    /* found on line 647 */
    margin: 0 0 0 5%;
    width: 45%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 3% 0;
  }
`;

export const FormH1 = styled.h1`
  text-align: center;
  text-decoration: underline;
`;
