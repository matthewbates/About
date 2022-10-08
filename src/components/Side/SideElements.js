import styled from "styled-components";

export const StyledSideContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${({ props }) => (props.orientaiton === "left" ? "40px" : "auto")};
  right: ${(props) => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;

  @media (max-width: 1080px) {
    left: ${(props) => (props.orientation === "left" ? "20px" : "auto")};
    right: ${(props) => (props.orientation === "left" ? "auto" : "20px")};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
