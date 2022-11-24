import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ContactContainer = styled.div`
  /* background: #05386b; */
  background: ${({ isClicked }) =>
    isClicked ? `${CONSTANTS.colors.batman}` : "#05386b"};
  border-top: ${({ isClicked }) =>
    isClicked
      ? "1px solid grey"
      : `1px solid ${CONSTANTS.colors.persephoneWhite}`};
  height: 100%;
`;

export const FormH3 = styled.h2`
  margin-top: 2rem;
  line-height: 3rem !important;
  font-weight: 400 !important;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato" !important;
  text-transform: uppercase;
  color: ${CONSTANTS.colors.persephoneWhite};
`;
