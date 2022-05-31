import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const ProjectContainer = styled.div`
  min-height: 100vh;
  display: flex;
  text-align: left;
  padding-top: 30px;
  align-items: center;
  padding-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  color: ${CONSTANTS.colors.white};
  background-color: grey;
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
    min-height: 100vh;
  }
  .header {
    margin-top: 50px;
  }
`;
