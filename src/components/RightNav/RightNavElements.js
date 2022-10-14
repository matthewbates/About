import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const UlStyle = styled.aside`
  position: fixed;
  z-index: 999;
  width: 55%;
  height: 100%;
  padding-top: 3.5rem;
  flex-flow: column nowrap;
  z-index: 999;
  transition: 0.4s ease-in;
  background: ${CONSTANTS.colors.batman};
  right: ${({ open }) => (open ? "0" : "-100%")};
  opacity: ${({ open }) => (open ? 1 : 0)};

  @media screen and (min-width: 420px) and (max-width: 768px) {
    width: 45%;
  }
`;

export const AuthorImg = styled.img`
  margin-top: 2rem;
  width: 170px;
  height: 170px;
  border-radius: 50%;
`;

export const AuthorName = styled.h1`
  color: ${CONSTANTS.colors.persephoneWhite};
  margin-top: 2rem;
  font-size: 25px;
  display: block;
  text-align: center;
  font-family: "Lato";
`;
