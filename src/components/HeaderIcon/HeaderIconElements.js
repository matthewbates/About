import styled from "styled-components";

export const HeaderIconStyles = styled.nav`
  z-index: -1;
  img {
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.2, 1.2);
  }

  @media screen and (max-width: 420px) {
    size: 40px;
  }
`;
