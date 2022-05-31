import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const UlStyle = styled.ul`
  width: 250px;
  height: 100vh;
  padding-top: 3.5rem;
  flex-flow: column nowrap;
  transition: transform 0.4s ease-in-out;
  background: linear-gradient(to bottom right, #333333, #121212);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

export const AuthorImg = styled.img`
  margin-top: 3.5rem;
  margin-left: 1.6rem;
  width: 160px;
  height: 160px;
  border-radius: 50%;

  @media screen and (max-width: 390px) {
    margin-top: 3.8rem;
  }
/* 
  @media screen and (max-width: 820px) {
    margin-top: 8rem;
  } */
`;

export const AuthorName = styled.h1`
  display: block;
  text-align: center;
  color: #fff;
  margin-right: 2.2rem;
`;

export const IconContainer = styled.div`
  color: white;
  margin-left: 1.5rem;
  line-height: 25px;
`;

export const ChimneyIcon = styled.i``;

export const PhoneIcon = styled.i`
  margin-left: 1.3rem;
`;

export const EmailIcon = styled.i`
  margin-left: 0.1rem;
`;

export const BtnLink = styled.button`
  align-items: center;
  line-height: 25px;
  margin-left: 3rem;
`;
