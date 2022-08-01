import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SkillsContainer = styled.div`
display: inline-block;
  height: 100vh;
  background-color: ${CONSTANTS.colors.blueGrotto};
`;

export const SkillsDiv = styled.div`
  /* display: inline-block; */
`;

export const SkillsProgress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  box-shadow: 0 2px 5px;
`;

export const SkillsImage = styled.img`
  margin: 10px;
  height: 60px;
`;
