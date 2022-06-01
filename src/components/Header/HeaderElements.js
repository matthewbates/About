import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const StyledHeader = styled.nav`
  background-color: #faf9f6;
  margin-top: 3.5rem;
  z-index: 1;
  height: 65px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  width: 96%;

  /* is this doing anything? */
  /* width: ${({ width }) => width || "80%"}; */

  /* background-color: ${CONSTANTS.colors.white}; */
  position: ${({ position }) => position || "relative"};
  /* border-bottom: 2px solid ${CONSTANTS.colors.offWhite}; */

  /* take this off? */
  /* box-shadow: ${CONSTANTS.colors.boxShadowBlack} 0px 2px 5px; */

  @media screen and (max-width: 820px) {
    width: 93%;
  }

  @media screen and (max-width: 390px) {
    width: 86%;
  }

  @media screen and (max-width: 280px) {
    width: 80%;
  }

  .icon-container {
    display: flex;
    align-items: center;
  }
`;
