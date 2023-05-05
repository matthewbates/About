import styled from "styled-components";

export const ProjectListContainer = styled.div`
  .listItem {
    position: relative;
    display: flex;
    margin: 2em;
    justify-content: center;
    opacity: 0;
    transform: scale(85%);
    transition: 0.3s;

    @media (max-width: 690px) {
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
