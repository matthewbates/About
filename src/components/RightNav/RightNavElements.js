import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const UlStyle = styled.aside`
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 999;
  width: 55%;
  height: 100vh;
  padding-top: 3.5rem;
  flex-direction: column;
  flex-wrap: nowrap;
  z-index: 999;
  transition: 0.4s ease-in;
  background: #090909;
  right: ${({ open }) => (open ? "0" : "-100%")};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;

export const AuthorImg = styled.img`
  margin-top: 0.5rem;
  width: 150px;
  height: 150px;
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
