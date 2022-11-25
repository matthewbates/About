import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SkillsContainer = styled.section`
  background: ${({ isClicked }) =>
    isClicked ? `${CONSTANTS.colors.batman}` : "#05386b"};
  border-top: ${({ isClicked }) =>
    isClicked
      ? "1px solid grey"
      : `1px solid ${CONSTANTS.colors.persephoneWhite}`};
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
  gap: 2rem;
  justify-content: space-evenly !important;
`;

export const SkillsCard = styled.div`
  border: 2px solid ${CONSTANTS.colors.persephoneWhite};
  border-radius: 5px !important;
  background-color: ${CONSTANTS.colors.persephoneWhite};
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;
  justify-content: center !important;
  align-items: center !important;
  max-width: 420px !important;
  padding: 0 auto !important;

  @media screen and (max-width: 768px) {
    max-width: 320px;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .icon {
    &:hover {
      transition: 200ms ease-in-out;
      transform: scale(1.2);
    }
  }

  &:hover {
    transform: translate(4px, -4px);
    box-shadow: -12px 12px #000;
  }
`;

export const SkillsImage = styled.img`
  padding: 1rem;
  width: 100px;
  height: 100px;
`;

export const SkillsH3 = styled.h3`
  font-family: "Space Mono";
  color: ${CONSTANTS.colors.softBlack};
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: 700;
`;

export const SkillsHeader = styled.h2`
  margin-top: 2rem;
  line-height: 3rem !important;
  font-weight: 400 !important;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato" !important;
  text-transform: uppercase;
  color: ${CONSTANTS.colors.persephoneWhite};
`;
