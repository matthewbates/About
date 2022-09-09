import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const StyledHeader = styled.nav`
  background: #fff;
  margin-top: 3.5rem;
  z-index: 1;
  height: 65px;
  display: flex;
  padding: 0 20px;
  /* align-items: center; */
  /* justify-content: space-between; */
  width: ${({ width }) => width || "90%"};
  position: ${({ position }) => position || "relative"};
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.8);
`;
