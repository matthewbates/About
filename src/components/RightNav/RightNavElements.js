import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const RightNavContainer = styled.aside`
  position: fixed;
  width: 40%;
  height: 100vh;
  transition: 0.4s ease-in;
  background: rgba(0, 0, 0, 0.85);
  right: ${({ open }) => (open ? "0" : "-100%")};

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

export const RightNavItems = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Arial";
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 25%;
  gap: 1em;

  @media screen and (max-width: 480px) {
    margin-top: 10%;
  }
`;

export const AuthorImg = styled.img`
  margin: auto;
  width: 175px;
  height: 175px;
  border-radius: 50%;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 225px;
    height: 225px;
  }
`;

export const AuthorName = styled.h2`
  color: ${CONSTANTS.colors.persephoneWhite};
`;

export const NavLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 3.5em;
    
  img {
    bottom: 0,
    left: 0
  }
    @media screen and (max-width: 480px) {
      gap: 2em;
    }
  `;
