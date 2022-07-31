import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SkillsContainer = styled.div`
  height: 100vh;
  background-color: ${CONSTANTS.colors.blueGrotto};
`;

export const SkillsDiv = styled.div`
  display: inline-block;
  border: 2px solid black;
`;

export const SkillsProgress = styled.progress`
  display: inline-block;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: 0 2px 5px;
`;

export const SkillsImage = styled.img`
  margin: 15px;
  height: 60px;
`;
