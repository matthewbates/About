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
  margin: 0.5em;
  padding: 2px;
  transition: 0.3s;

  @media screen and (min-width: 1100px) {
    margin: 1em;
  }

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

  &:hover {
    filter: brightness(25%);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
