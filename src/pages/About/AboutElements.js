import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const AboutContainer = styled.div`
  background: ${CONSTANTS.colors.indigo};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  color: black;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: 969px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-card {
    max-width: 500px;
    border-radius: 12px;
  }
`;

export const AboutHeader = styled.div`
  max-width: 600;
  margin-bottom: 30px;
  min-width: 325px;
`;

export const AboutH1 = styled.h1`
  padding-bottom: 20px;
  color: #f1f2f2;
  text-decoration: underline;
`;

export const SkillsImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    padding-bottom: 20px;
  }
`;

export const AboutSection = styled.h3`
  min-width: 325px;
  color: #f1f2f2;
`;

export const SkillsImage = styled.img`
  margin: 10px;
  height: 80px;

  &:hover {
    -webkit-transform: rotateY(360deg);
    transition: 2s ease-out;
  }
`;

export const SkillsH3 = styled.h3`
  color: ${CONSTANTS.colors.persephoneWhite};
  line-height: 2rem;

  @media screen and (max-width: 768px) {
    line-height: 1.6rem;
  }
`;
