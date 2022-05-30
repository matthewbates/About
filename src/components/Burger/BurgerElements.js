import styled from "styled-components";

export const StyledBurger = styled.div`
  z-index: 2;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;

  .nav-burger {
    position: fixed;
    top: 15px;
    right: 20px;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 20px;
    transform-origin: 1px;
    transition: all 0.4s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(405deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      /* transform: ${({ open }) =>
        open ? "translateX(100%)" : "translateX(0)"}; */
      opacity: ${({ open }) => (open ? 0 : 1)};
      transition: 0.1s;
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(315deg)" : "rotate(0)")};
    }
  }
`;
