import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SkillsContainer = styled.section`
  background: #f75990;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const SkillsCard = styled.div`
  border: 2px solid ${CONSTANTS.colors.persephoneWhite};
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 20px 38px, rgba(0, 0, 0, 0.5) 0px 15px 12px;
  border-radius: 20px;
  background-color: transparent;
  margin-top: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  max-width: 420px;
`;

export const SkillsImage = styled.img`
  padding: 1rem;
  width: 100px;
  height: 100px;

  &:hover {
    transform: rotateX(360deg);
    transition: transform 1.5s ease-in-out;
  }
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
