import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const HeaderLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
  width: 100%;
`;

export const HeaderLinkScroll = styled(Link)`
  cursor: pointer;
  padding: 0 0.7rem;
  font-family: "Poppins";
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
    transform: scaleX(0);
    transform-origin: bottom left;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
