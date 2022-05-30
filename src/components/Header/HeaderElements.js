import styled from "styled-components";

export const StyledHeader = styled.nav`
  z-index: 1;
  height: 65px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  /* width: ${({ width }) => width || "100%"}; */
  background-color: white;
  position: ${({ position }) => position || "relative"};
  border-bottom: 2px solid white;
  box-shadow: black 0px 2px 5px;
`;

export const MediumIcon = styled.i`
  height: 37px;
  margin-right: 15px;
`;

export const GitHubIcon = styled.i`
  height: 39.4px;
  margin-right: 15px;
`;

export const LinkedInIcon = styled.i`
  height: 35px;
  margin-right: 15px;
  margin-top: 1px;
`;

export const CodeWarsIcon = styled.i`
  padding: 3;
  height: 35px;
  margin-top: 1px;
  margin-right: 15px;
  border-radius: 5px;
  background-color: #a8332a;
`;
