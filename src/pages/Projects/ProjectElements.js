import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ProjectContainer = styled.div`
  background: ${({ isClicked }) =>
    isClicked ? `${CONSTANTS.colors.batman}` : "#05386b"};
  border-top: ${({ isClicked }) =>
    isClicked
      ? "1px solid grey"
      : `1px solid ${CONSTANTS.colors.persephoneWhite}`};
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
`;

export const ProjectHeader = styled.h2`
  line-height: 3rem !important;
  font-weight: 400 !important;
  font-family: "Lato" !important;
  text-transform: uppercase;
  color: ${CONSTANTS.colors.persephoneWhite};
`;
