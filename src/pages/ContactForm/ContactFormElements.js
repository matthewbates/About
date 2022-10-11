import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ContactContainer = styled.div`
  background: #05386b;
  border-top: 1px solid ${CONSTANTS.colors.persephoneWhite};
  height: 100%;
`;

export const FormH3 = styled.h3`
  font-weight: 400;
  color: ${CONSTANTS.colors.persephoneWhite};
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
  font-weight: 300;
  text-transform: uppercase;
`;
