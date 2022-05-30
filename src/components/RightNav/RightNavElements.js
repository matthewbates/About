import styled from "styled-components";

export const UlStyle = styled.ul`
  width: 250px;
  height: 100vh;
  padding-top: 2.5rem;
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
