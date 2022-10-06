import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ProjectContainer = styled.div`
  background-color: ${CONSTANTS.colors.blue};
  display: flex;
  text-align: left;
  padding-top: 30px;
  align-items: center;
  padding-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
    min-height: 100vh;
  }
  .header {
    margin-top: 50px;
  }
`;

export const ProjectHeader = styled.h2`
  line-height: 3rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
  font-weight: 300;
  text-transform: uppercase;
  color: ${CONSTANTS.colors.persephoneWhite};
`;

export const ProjectH1 = styled.h1`
  text-decoration: underline;
`;
