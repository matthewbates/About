import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const StyledContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 999;
  background: ${CONSTANTS.colors.persephoneWhite};

  width: ${({ width }) => width || "90%"};
  position: ${({ position }) => position || "relative"};
  /* border-bottom: 2px solid #05368b; */
`;

export const StyledWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.8);
  align-items: center;
`;

export const HeaderLinksSpan = styled.span`
  margin-left: 500px;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
