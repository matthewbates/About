import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ProjectContainer = styled.div`
  padding: 1.5em;
  background: #05386b;
  border-top: 1px solid ${CONSTANTS.colors.persephoneWhite};

  @media screen and (min-width: 768px) {
    padding: 3em;
  }
`;

export const H2 = styled.h2`
  display: flex;
  margin-top: 2rem;
  line-height: 3rem;
  justify-content: center;
  color: ${CONSTANTS.colors.persephoneWhite};
  text-transform: uppercase;
  font-family: "Arial";
`;

export const ProjectItem = styled.div``;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  height: 400px;
  margin: 2em;

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0;
  }
`;

export const ProjectImg = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px) brightness(25%);
  transition: 0.3s;

  @media screen and (min-width: 768px) {
    margin: auto;
    width: 50%;
    height: 80%;
    max-width: 500px;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  max-width: 30%;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  max-width: 80%;
  align-self: center;
  transition: 0.3s;

  p {
    &:first-child {
      font-size: 14px;
      width: auto;

      @media screen and (min-width: 768px) {
        text-align: ${({ isReversed }) => (isReversed ? "right" : "left")};
      }
    }

    &:nth-child(2) {
      font-size: 20px;
      text-align: left;
      font-family: "Arial";
      font-weight: bold;

      @media screen and (min-width: 768px) {
        text-align: ${({ isReversed }) => (isReversed ? "right" : "left")};
      }
    }

    &:last-of-type {
      font-size: 14px;
      font-family: "Space Mono";
      text-align: left;

      @media screen and (min-width: 768px) {
        text-align: ${({ isReversed }) => (isReversed ? "right" : "left")};
        margin-left: ${({ isReversed }) => (isReversed ? "auto" : "null")};
        max-width: 50%;
      }
    }
  }

  h6 {
    text-align: left;

    @media screen and (min-width: 768px) {
      max-width: 50%;
      border: none;
      padding: 1.5em;
      border-radius: 6px;
      background: #112240;
      color: #a8b2d1;
      font-family: "Arial";
      letter-spacing: 1px;
      margin-left: ${({ isReversed }) => (isReversed ? "auto" : "none")};
      text-align: ${({ isReversed }) => (isReversed ? "right" : "left")};
    }
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  width: 60px;
  color: #fff;
  gap: 10px;

  a {
    width: 60px;
    transition: 0.3s;
    cursor: pointer;
    color: ${CONSTANTS.colors.persephoneWhite};

    &:last-child {
      color: ${CONSTANTS.colors.persephoneWhite};
    }
    &:hover {
      color: #5cdb95;
    }
  }
  @media screen and (min-width: 768px) {
    margin-left: ${({ isReversed }) => (isReversed ? "auto" : "none")};
  }
`;
