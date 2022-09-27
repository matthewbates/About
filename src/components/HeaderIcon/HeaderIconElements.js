import styled from "styled-components";

export const HeaderIconStyles = styled.nav`
  img:hover {
    transform: scale(1.15, 1.15);
    transition: 200ms ease-in-out;
  }

  @media screen and (max-width: 420px) {
    size: 40px;
  }
`;
