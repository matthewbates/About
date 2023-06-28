import styled from "styled-components";

export const StyledBurger = styled.div`
  display: ${({ open }) => (open ? "none" : "flex")};
  margin-right: 1em;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
