import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const UlStyle = styled.aside`
  width: 225px;
  height: 100vh;
  padding-top: 3.5rem;
  flex-flow: column nowrap;
  transition: transform 0.4s ease-in-out;
  background: ${CONSTANTS.colors.batman};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  /* @media screen and (max-width: 390px) {
    width: 100px;
  } */
`;

export const AuthorImg = styled.img`
  margin-top: 2.8rem;
  margin-left: 2.6rem;
  width: 140px;
  height: 140px;
  border-radius: 50%;

  @media screen and (max-width: 390px) {
    margin-top: 2rem;
  }
`;

export const AuthorName = styled.h1`
  color: ${CONSTANTS.colors.persephoneWhite};
  display: block;
  text-align: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  color: ${CONSTANTS.colors.persephoneWhite};
  /* margin-left: 1.5rem;
   */
  text-align: center;
  line-height: 30px;
`;

export const ChimneyIcon = styled.i`
  color: ${CONSTANTS.colors.persephoneWhite};
`;

export const PhoneIcon = styled.i`
  color: ${CONSTANTS.colors.persephoneWhite};
`;

export const EmailIcon = styled.i`
  color: ${CONSTANTS.colors.persephoneWhite};
`;
