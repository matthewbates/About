import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const StyledHeader = styled.nav`
  z-index: 1;
  height: 65px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  /* width: ${({ width }) => width || "90%"}; */
  background-color: ${CONSTANTS.colors.white};
  position: ${({ position }) => position || "relative"};
  border-bottom: 2px solid ${CONSTANTS.colors.offWhite};
  box-shadow: ${CONSTANTS.colors.boxShadowBlack} 0px 6px 5px;
  .icon-container {
    display: flex;
    align-items: center;
  }
`;
