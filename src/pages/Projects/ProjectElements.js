import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ProjectContainer = styled.div`
  background: #05386b;
  border-top: 1px solid ${CONSTANTS.colors.persephoneWhite};
  display: flex;
  /* display: grid;
  grid-template-columns: minmax(200px, 1fr); */
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
    /* margin-top: 50px; */
  }
`;

export const ProjectHeader = styled.h2`
  margin-top: 2rem;
  line-height: 3rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
  text-transform: uppercase;
  color: ${CONSTANTS.colors.persephoneWhite};
`;
