import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const AboutContainer = styled.div`
  background: ${CONSTANTS.colors.midnightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
`;

export const AboutHeader = styled.h2`
  font-weight: 400;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
  font-weight: 300;
  text-transform: uppercase;
  color: ${CONSTANTS.colors.persephoneWhite};
`;

export const AboutH1 = styled.h1`
  font-size: 42px;
  color: #f1f2f2;
  font-family: "Lato";
`;

export const AboutSection = styled.h3`
  min-width: 325px;
  color: #f1f2f2;
`;

export const SkillsH3 = styled.h3`
  color: ${CONSTANTS.colors.persephoneWhite};
  text-align: justify;
  line-height: 2rem;
  letter-spacing: 1px;
  font-family: "Cormorant Garamond";
  font-weight: bold;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    line-height: 1.6rem;
  }
`;
