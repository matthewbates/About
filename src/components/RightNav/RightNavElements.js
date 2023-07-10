import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const RightNavContainer = styled.aside`
  position: fixed;
  top: 0;
  width: 40%;
  right: ${({ open }) => (open ? "0" : "-100%")};
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

export const RightNavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
  font-family: "Arial";
  width: 100%;
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
  margin-top: 3em;
  width: 175px;
  height: 175px;
  border-radius: 50%;
`;

export const AuthorName = styled.h2`
  color: ${CONSTANTS.colors.persephoneWhite};
  margin-top: 1em;
`;

export const NavLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 1em;
    
  img {
    bottom: 0,
    left: 0
  }
    @media screen and (max-width: 480px) {
      gap: 2em;
    }
  `;
