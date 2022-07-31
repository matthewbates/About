import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SkillsContainer = styled.div`
  height: 100vh;
  background-color: ${CONSTANTS.colors.blueGrotto};
`;

export const SkillsDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const SkillsImage = styled.img`
  margin: 10px;

  height: 60px;
  line-height: 50px;
`;
