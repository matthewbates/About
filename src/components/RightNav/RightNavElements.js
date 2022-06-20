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
    margin-top: 1rem;
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

export const RightNavButton = styled.button`
  appearance: button;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 2px;
  box-shadow: #fff 4px 4px 0 0,
    ${CONSTANTS.colors.persephoneWhite} 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  line-height: 15px;
  padding: 12px 30px;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;

  &:not([disabled]):active {
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;
