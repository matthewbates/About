import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SkillsContainer = styled.section`
  background: #05386b;
  border-top: 1px solid ${CONSTANTS.colors.persephoneWhite};
`;

export const SkillsWrapper = styled.div`
  display: grid;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const SkillsCard = styled.div`
  border: 2px solid ${CONSTANTS.colors.persephoneWhite};
  border-radius: 15px;
  box-shadow: 0px 10px 20px;
  border-radius: 20px;
  background-color: transparent;
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  max-width: 420px;
  padding: 0 auto;

  @media screen and (max-width: 768px) {
    max-width: 320px;
  }

  &:hover,
  &:focus-within {
    transform: translateY(-7px);
    box-shadow: 0px 20px 30px;
  }
`;

export const SkillsImage = styled.img`
  padding: 1rem;
  width: 100px;
  height: 100px;
`;

export const SkillsH3 = styled.h3`
  font-family: "Space Mono";
  color: ${CONSTANTS.colors.persephoneWhite};
  margin-top: 2rem;
`;

export const SkillsHeader = styled.h2`
  margin-top: 2rem;
  line-height: 3rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
  text-transform: uppercase;
  color: ${CONSTANTS.colors.persephoneWhite};
`;
