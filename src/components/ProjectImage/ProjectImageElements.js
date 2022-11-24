import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ProjectImageContainer = styled.div`
  .overlay {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 0%;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 30px;
    font-size: 16px;

    @media screen and (max-width: 420px) {
      font-size: 12px;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }

  &:hover .overlay {
    height: 100%;
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    color: white;
    a {
      padding: 10px;
      &.external {
      }
      svg {
        color: ${CONSTANTS.colors.persephoneWhite};
        width: 28px;
        height: 28px;

        &:hover {
          color: #5cdb95;
          transition: 200ms ease-in;
        }
      }
    }
  }
`;

export const ProjectImageWrapper = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 650px;
  max-height: 500px;
`;

export const ImageH3 = styled.h3`
  font-family: "Poppins";
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 18px;
  }
`;

export const ImageP = styled.p`
  color: ${CONSTANTS.colors.persephoneWhite};
  max-width: 460px;

  @media screen and (max-width: 390px) {
    font-size: 8px;
  }
`;

export const ImageA = styled.a`
  color: ${CONSTANTS.colors.persephoneWhite};
  text-decoration: none;
  letter-spacing: 2px;
  font-family: "Poppins";
  width: 70px;

  &:hover {
    font-style: italic;
  }

  @media screen and (max-width: 390px) {
    font-size: 8px;
  }
`;
