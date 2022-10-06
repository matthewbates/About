import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const UlStyle = styled.aside`
  position: fixed;
  z-index: 999;
  width: 45%;
  height: 100%;
  padding-top: 3.5rem;
  flex-flow: column nowrap;
  z-index: 999;
  transition: 0.4s ease-in;
  background: ${CONSTANTS.colors.batman};
  right: ${({ open }) => (open ? "0" : "-100%")};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;

export const AuthorImg = styled.img`
  margin-top: 3rem;
  width: 170px;
  height: 170px;
  border-radius: 50%;
`;

export const AuthorName = styled.h1`
  color: ${CONSTANTS.colors.persephoneWhite};
  margin-top: 1rem;
  font-size: 25px;
  display: block;
  text-align: center;
  font-family: "Lato";
`;

export const RightNavBtn = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const RightNavButton = styled.button`
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-top: 2rem;
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
