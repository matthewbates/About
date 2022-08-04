import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SkillsContainer = styled.section`
  width: 100%;
  display: flex;
  background-color: ${CONSTANTS.colors.blueGrotto};

  @media screen and (max-width: 1200px) {
    height: auto;
  }
`;

export const SkillsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 70%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto 2% auto;
  gap: 40px;

  @media screen and (max-width: 1200px) {
    width: 90%;
    margin: 2rem auto;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillsH1 = styled.h1`
  color: ${CONSTANTS.colors.persephoneWhite};
  font-size: 2.5rem;
  grid-column-start: 1;
  grid-column-end: 6;
  text-align: center;
  text-decoration: underline;

  @media screen and (max-width: 1007px) {
    text-align: center;
  }

  @media screen and (max-width: 700px) {
    grid-column-end: 3;
  }
`;

export const SkillsH2 = styled.h2`
  font-family: "Quicksand";
  font-size: 1.3rem;
`;

export const SkillsArticle = styled.article`
  width: auto;
  text-align: center;
`;

export const SkillsImage = styled.img`
  width: 60%;
  min-height: 120px;
  min-width: 95px;
  object-fit: contain;

  &:hover {
    transform: rotate(360deg);
    transition: transform 0.5s ease-in-out;
  }
`;

export const SkillsProgress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  box-shadow: 0 2px 5px;
`;
