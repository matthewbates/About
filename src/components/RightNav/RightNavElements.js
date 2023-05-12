import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const UlStyle = styled.aside`
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100vh;
  padding-top: 3.5rem;
  flex-direction: column;
  flex-wrap: nowrap;
  z-index: 999;
  transition: 0.4s ease-in;
  background: #000000;
  right: ${({ open }) => (open ? "0" : "-100%")};
  /* opacity: ${({ open }) => (open ? 1 : 0)}; */

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

export const RightNavContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  font-family: "Arial";
  letter-spacing: 1px;
`;
