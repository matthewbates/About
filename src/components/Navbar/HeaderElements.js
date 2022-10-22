import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const StyledContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 999;
  /* background: ${CONSTANTS.colors.persephoneWhite}; */
  background: #05386b;
  width: ${({ width }) => width || "90%"};
  position: ${({ position }) => position || "relative"};
`;

export const StyledWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.8);
  align-items: center;

  .wrg-toggle {
    touch-action: pan-x;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
  .wrg-toggle--checked .wrg-toggle-check {
    opacity: 1;
  }
  .wrg-toggle--checked .wrg-toggle-uncheck {
    opacity: 0;
  }
  .wrg-toggle--checked .wrg-toggle-circle {
    left: 27px;
  }
  .wrg-toggle-input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .wrg-toggle-check,
  .wrg-toggle-uncheck {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .wrg-toggle-check {
    left: 8px;
  }
  .wrg-toggle-uncheck {
    opacity: 1;
    right: 10px;
  }

  .wrg-toggle-uncheck span,
  .wrg-toggle-check span {
    align-items: center;
    display: flex;
    height: 10px;
    justify-content: center;
    position: relative;
    width: 10px;
  }

  .wrg-toggle-container {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #4d4d4d;
    transition: all 0.2s ease;
  }

  .wrg-toggle-circle {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid #4d4d4d;
    border-radius: 50%;
    background-color: #fafafa;
    box-sizing: border-box;
    transition: all 0.25s ease;
  }
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
