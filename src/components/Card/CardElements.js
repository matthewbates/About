import styled from "styled-components";

export const CardContainer = styled.div`
  .content {
    /* Pre-animation */
    opacity: 0;
    transform: scale(85%);
    transition: 1s;
    /* Styles */
    padding: 40px;
    border: 1px solid white;
    box-shadow: 0px 19px 38px, 0px 15px 12px;
    @media (max-width: 969px) {
      padding: 30px;
    }
    @media (max-width: 700px) {
      padding: 20px;
    }
    /* Fields to override */
    ${({ styleOverrides }) => ({ ...styleOverrides })}
  }
  .animate {
    opacity: 1;
    transition: 1s;
    transform: scale(100%);
  }
`;
