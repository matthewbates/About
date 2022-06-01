import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ProjectInfoContainer = styled.div`
  .app-text {
    padding: 30px;
    max-width: 450px;
    text-align: center;
    border-radius: 12px;
    margin: 0% 10% 0% 2%;
    border: 1px solid ${CONSTANTS.colors.offWhite};
    background-color: ${CONSTANTS.colors.projectInfoBackgroundColor};
    box-shadow: ${CONSTANTS.colors.boxShadowProjectInfo} 0px 22px 70px 4px;
    @media (max-width: 900px) {
      max-width: 350px;
      margin: 2% 2% 0% 2%;
    }
    a {
      transition: 0.2s;
      font-style: italic;
      text-decoration: none;
      color: ${CONSTANTS.colors.white};
    }
    /* a:hover {
      transition: 0.2s;
      font-weight: bolder;
      text-decoration: underline;
    } */
  }
  .p_margin {
    text-align: center;
    margin: 20px 5px 0px 5px;
  }
  .title-margin {
    text-decoration: underline;
    text-align: center;
    margin: 5px;
  }
`;
