import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SkillsContainer = styled.section`
  background: #05386b;
  border-top: 1px solid ${CONSTANTS.colors.persephoneWhite};
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-evenly;
  padding-top: 3rem;
  padding-bottom: 3rem;
  max-width: 100%;
  margin: 0 auto;
`;

export const SkillsCard = styled.div`
  border: 2px solid ${CONSTANTS.colors.persephoneWhite};
  border-radius: 5px !important;
  background-color: ${CONSTANTS.colors.persephoneWhite};
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;
  transition: 0.2s ease-in;
  max-width: 100%;
  width: 400px;
  height: 100%;
  padding: 10px;

  @media screen and (max-width: 768px) {
    gap: 2rem;
    max-width: 320px;
  }

  .icon {
    &:hover {
      transition: 200ms ease-in-out;
      transform: scale(1.2);
    }
  }

  &:hover {
    transform: translate(2px, -2px);
    box-shadow: -14px 14px #000;
  }
`;

export const SkillsImage = styled.img`
  padding: 1rem;
  width: 100px;
  height: 100px;
  transition: 0.3s;
`;

export const SkillsH3 = styled.h3`
  font-family: "Space Mono";
  color: ${CONSTANTS.colors.softBlack};

  margin: 0 auto;
  font-weight: 700;
  max-width: 200px;
`;

export const SkillsHeader = styled.h2`
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
