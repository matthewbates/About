import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SkillsContainer = styled.section`
  background: ${CONSTANTS.colors.royalBlue};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
`;

export const SkillsWrapper = styled.div`
  /* margin-top: 3rem;
  margin-bottom: 3rem; */
`;

export const SkillsHeader = styled.h2`
  margin-top: 2rem;
  line-height: 3rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
  font-weight: 300;
  text-transform: uppercase;
`;

export const SkillsCard = styled.div`
  border: 2px solid ${CONSTANTS.colors.persephoneWhite};
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 20px 38px, rgba(0, 0, 0, 0.5) 0px 15px 12px;
  width: 60%;
  border-radius: 20px;
  background-color: transparent;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  max-width: 420px;
`;

export const SkillsImage = styled.img`
  padding: 1rem;
  width: 65px;
  height: 65px;
  vertical-align: middle;

  &:hover {
    transform: scale(1.18);
    transition: transform 0.3s ease-in-out;
  }
`;

export const SkillsH3 = styled.h3`
  font-family: "Lato";
  color: ${CONSTANTS.colors.persephoneWhite};
`;
