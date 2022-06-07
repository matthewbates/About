import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const UlStyle = styled.aside`
  width: 190px;
  height: 100vh;
  padding-top: 3.5rem;
  flex-flow: column nowrap;
  transition: transform 0.4s ease-in-out;
  background: ${CONSTANTS.colors.batman};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

export const AuthorImg = styled.img`
  margin-top: 6.4rem;
  margin-left: 1.8rem;
  width: 130px;
  height: 130px;
  border-radius: 50%;

  @media screen and (max-width: 390px) {
    margin-top: 2rem;
  }
`;

export const AuthorName = styled.h1`
  color: ${CONSTANTS.colors.persephoneWhite};
  font-size: 25px;
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
