import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ProjectContainer = styled.div`
  padding: 1em;
  background: #003b73;
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
  margin: 1em;

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0;
  }
`;

export const ProjectImg = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(25%);

  @media screen and (min-width: 768px) {
    padding: 3.5em;
   margin-left: 20%;
   margin-right: 10%
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  text-align: center;
  max-width: 80%;
  align-self: center;
  transition: 0.3s;

  p {
    &:first-child {
      font-size: 14px;
      text-align: left;
      font-family: "Arial";

      @media screen and (min-width: 768px) {
        text-align: ${({ isReversed }) => (isReversed ? "right" : "left")};
      }
    }

    &:nth-child(2) {
      font-size: 20px;
      text-align: left;
      font-family: "Arial";

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
      }
    }
  }

  h6 {
    text-align: left;

    @media screen and (min-width: 768px) {
      max-width: 60%;
      border: none;
      padding: 1.5em;
      border-radius: 6px;
      background: #112240;
      color: #a8b2d1;
      font-family: "Arial";
      line-height: 1.5em;
      margin-left: ${({ isReversed }) => (isReversed ? "auto" : "none")};
    }
  }

  a {
    &:first-child {
      display: flex;
      width: 60px;
    }

    &:last-child {
    }
    width: 60px;
    margin-right: auto;
    color: ${CONSTANTS.colors.persephoneWhite};
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      color: #5cdb95;
    }

    &:last-child {
      color: ${CONSTANTS.colors.persephoneWhite};

      &:hover {
        color: #5cdb95;
      }
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
    margin-right: auto;
    color: ${CONSTANTS.colors.persephoneWhite};
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      color: #5cdb95;
    }

    &:last-child {
      color: ${CONSTANTS.colors.persephoneWhite};

      &:hover {
        color: #5cdb95;
      }
    }
  }
  @media screen and (min-width: 768px) {
    margin-left: ${({ isReversed }) => (isReversed ? "auto" : "none")};
  }
`;
