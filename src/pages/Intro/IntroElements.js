import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

// export const IntroContainer = styled.div`
//   background: #5cdb95;
//   color: ${CONSTANTS.colors.persephoneWhite};
//   height: 100vh;
//   background-size: cover;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   display: flex;

//   .subtitle {
//     color: ${CONSTANTS.colors.persephoneWhite};
//     letter-spacing: 0.2rem;
//   }
//   @media (max-width: 1100px) {
//     background-size: cover;

//     .text-container {
//       width: 100vw;
//       height: auto;
//       padding: 20px;
//       border-left: none;
//       border-right: none;
//       border-radius: 0px;
//       margin: 50px 0px;
//     }
//     .subtitle {
//       margin: 5px 0px 0px 0px;
//     }
//   }
// `;

// export const IntroWrapper = styled.div`
//   /* display: flex; */
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   top: 50%;
// `;

// export const IntroMemoji = styled.img`
//   height: 250px;

//   @media screen and (max-width: 420px) {
//     height: 300px;
//   }
// `;

// export const IntroH1 = styled.h1`
//   font-family: "League Spartan";
//   font-size: 3rem;
//   color: ${CONSTANTS.colors.persephoneWhite};

//   @media screen and (max-width: 420px) {
//     font-size: 2.5rem;
//   }
// `;

export const IntroContainer = styled.section`
  display: flex;
  -webkit-box-align: center;
  justify-content: center;
  flex-direction: column;
  background: #05386b;
  align-items: flex-start;
  min-height: 100vh;
  flex-wrap: wrap;

  @media screen and (min-width: 480px) and (max-width: 768px) {
    padding-top: 10vh;
  }

  .required::after {
    content: "&&";
    color: #5cdb95;
  }

  h1 {
    font-size: 18px;
    margin: 0 0 10px;
    color: ${CONSTANTS.colors.persephoneWhite};
    font-family: "Space Mono";

    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h2 {
    font-family: "Inter Tight";
    /* font-size: clamp(40px, 8vw, 40px); */
    line-height: 1.1;
    display: block;
    color: ${CONSTANTS.colors.blueGrotto};
    font-size: 60px;

    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
  }

  h3 {
    font-family: "Lato";
  }

  p {
    color: ${CONSTANTS.colors.persephoneWhite};
    font-family: "Space Mono";
    font-weight: 400;
  }
`;

export const IntroButton = styled.button`
  cursor: pointer;
  margin: 10% auto 0px;
  width: max-content;
  border: 1.5px solid #5cdb95;
  color: ${CONSTANTS.colors.persephoneWhite};
  background-color: transparent;
  padding: 12px 30px;
  margin-top: 1rem;
  font-family: "Space Mono";

  &:hover {
    color: #05386b;
    background: ${CONSTANTS.colors.persephoneWhite};
    transition: all 200ms ease-in-out;
  }
`;
