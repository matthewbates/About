import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link as LinkR } from "react-router-dom";

export const AboutContainer = styled.div`
  /* background: #05386b; */
  background: ${({ isClicked }) =>
    isClicked ? `${CONSTANTS.colors.batman}` : "#05386b"};
  height: 100%;
  border-top: 1px solid ${CONSTANTS.colors.persephoneWhite};
  border-top: ${({ isClicked }) =>
    isClicked
      ? "1px solid grey"
      : `1px solid ${CONSTANTS.colors.persephoneWhite}`};
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
  font-family: "Arial";
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
  color: #edf5e1;
`;

export const AboutH1 = styled.span`
  line-height: 2rem;
  letter-spacing: 1px;
  font-family: "Roboto";
  font-style: italic;
  font-weight: 900;
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 32px;
  position: relative;
  text-align: left;
  float: left;
  color: ${CONSTANTS.colors.persephoneWhite};

  @media screen and (max-width: 768px) {
    line-height: 1.6rem;
  }
`;

export const AboutA = styled.a`
  color: white;
  text-decoration: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #5cdb95;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
    transform: scaleX(0);
    transform-origin: bottom left;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const LinkRoute = styled(LinkR)`
  color: #5cdb95;
  text-decoration: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #5cdb95;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
    transform: scaleX(0);
    transform-origin: bottom left;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
