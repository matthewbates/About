import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const UlStyle = styled.aside`
  width: 260px;
  height: 100vh;
  padding-top: 3.5rem;
  flex-flow: column nowrap;
  z-index: 999;
  transition: transform 0.4s ease-in-out;
  background: ${CONSTANTS.colors.batman};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

export const AuthorImg = styled.img`
  margin-top: 2rem;
  margin-left: 4.2rem;
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

export const AuthorName = styled.h1`
  color: ${CONSTANTS.colors.persephoneWhite};
  font-size: 25px;
  display: block;
  text-align: center;
  align-items: center;
  font-family: "Quicksand" sans-serif;
`;

export const IconContainer = styled.div`
  color: ${CONSTANTS.colors.persephoneWhite};
  text-align: center;
  line-height: 30px;
`;

export const RightNavButton = styled.button`
  border-radius: 6px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : " 16px")};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "Lato";

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(80%);
    color: ${({ primary }) =>
      primary ? `${CONSTANTS.colors.eggshellWhite}` : "black"};
  }
`;

export const RightNavA = styled.a`
  font-family: "Poppins";
  color: "#F1F2F2";
  font-size: 16px;
  flex-direction: column;
  text-decoration: none;
`;
