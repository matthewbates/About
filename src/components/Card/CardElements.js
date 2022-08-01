import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const CardContainer = styled.div`
  .content {
    font-size: 18px;
    transform: scale(80%);
    transition: 1s;
    padding: 20px;
    border: 2px solid ${CONSTANTS.colors.persephoneWhite};
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.7) 0px 20px 38px,
      rgba(0, 0, 0, 0.5) 0px 15px 12px;

    @media (max-width: 969px) {
      padding: 30px;
    }

    @media (max-width: 700px) {
      padding: 20px;
      font-size: 18px;
    }

    .animate {
      opacity: 1;
      transition: 1s;
      transform: scale(100%);

      ${({ styleOverrides }) => ({ ...styleOverrides })}
    }
  }
`;
