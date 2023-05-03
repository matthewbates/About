import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const HeaderLinkScroll = styled(Link)`
  cursor: pointer;
  font-family: "Arial";
  position: relative;
  color: #05386b;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.3em;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #05386b;
    transform-origin: bottom right;
    transition: transform 0.3s;
    transform: scaleX(0);
    transform-origin: bottom left;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
