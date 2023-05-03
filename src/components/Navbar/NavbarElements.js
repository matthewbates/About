import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const StyledContainer = styled.nav`
  display: flex;
  background: ${CONSTANTS.colors.persephoneWhite};
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 80;
  width: ${({ width }) => width || "90%"};
  position: fixed;
  width: 100%;
  top: ${({ visible }) => (visible ? "0" : "-80px")};
  transition: top 0.4s;
`;

export const StyledWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.8);
  align-items: center;
`;

export const RightNavWrapper = styled.div`
  top: 0;
  right: 0;
  position: fixed;
  z-index: ${({ open }) => (open ? 1 : -1)};
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
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
