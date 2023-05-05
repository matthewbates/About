import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ContactContainer = styled.div`
  background: #05386b;
  border-top: 1px solid lightgray;
  height: 100%;
`;

export const FormH3 = styled.h2`
  margin-top: 2rem;
  line-height: 3rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Arial";
  text-transform: uppercase;
  color: ${CONSTANTS.colors.persephoneWhite};
`;
