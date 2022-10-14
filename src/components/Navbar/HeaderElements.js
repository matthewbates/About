import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const StyledContainer = styled.nav`
  /* NEW */
  /* position: fixed;
  height: 80px;
  background: ${CONSTANTS.colors.persephoneWhite};
  width: 100%;
  transition: top 0.6s;
  top: ${({ visible }) => (visible ? "0" : "-80px;")}; */

  /* OLD */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 999;
  background: ${CONSTANTS.colors.persephoneWhite};
  width: ${({ width }) => width || "90%"};
  position: ${({ position }) => position || "relative"};
`;

// position: "fixed",
// height: "80px",
// width: "100%",
// backgroundColor: `${CONSTANTS.colors.persephoneWhite}`,
// textAlign: "center",
// transition: "top 0.6s",
// zIndex: "999",

export const StyledWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.8);
  align-items: center;
`;

export const NavbarButton = styled.button`
  cursor: pointer;
  font-family: "Space Mono";
  position: relative;
  font-size: 14px;
  color: #05386b;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  text-align: center;
  justify-content: center;
  margin-top: 5px;
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
