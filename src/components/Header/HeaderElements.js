import styled from "styled-components";

export const StyledHeader = styled.nav`
  z-index: 1;
  height: 65px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  /* width: ${({ width }) => width || "90%"}; */
  background-color: white;
  position: ${({ position }) => position || "relative"};
  border-bottom: 2px solid white;
  box-shadow: black 0px 2px 5px;
  .icon-container {
    display: flex;
    align-items: center;
  }
`;
