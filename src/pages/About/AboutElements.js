import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link as LinkR } from "react-router-dom";

export const AboutContainer = styled.div`
  background: ${CONSTANTS.colors.midnightBlue};
  height: 100%;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
  margin-right: 2em;
  line-height: 1.77778;
  font-weight: 400;
`;

export const AboutHeader = styled.h2`
  margin-top: 2rem;
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

export const AboutSection = styled.h3`
  min-width: 325px;
  color: #f1f2f2;
`;

export const AboutP = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Space Mono";
  font-size: 20px;
`;

export const AboutH1 = styled.span`
  color: ${CONSTANTS.colors.persephoneWhite};
  line-height: 2rem;
  letter-spacing: 1px;
  font-family: "Radnika";
  font-style: italic;
  font-weight: 900;
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 32px;
  position: relative;
  text-align: left;
  float: left;

  @media screen and (max-width: 768px) {
    line-height: 1.6rem;
  }
`;

export const AboutA = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkRoute = styled(LinkR)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
