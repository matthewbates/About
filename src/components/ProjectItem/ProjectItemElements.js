import styled from "styled-components";

export const ProjectListContainer = styled.div`
  .listItem {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 40px 0px 40px;
    justify-content: center;
    /* Pre-animation */
    opacity: 0;
    transform: scale(85%);
    transition: 1s;
    @media (max-width: 900px) {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: left;
    }
  }
  .animate {
    opacity: 1;
    transition: 1s;
    transform: scale(100%);
  }
`;