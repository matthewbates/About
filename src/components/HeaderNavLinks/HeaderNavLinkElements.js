import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const HeaderLinksContainer = styled.div`
  /* display: flex;
  justify-content: center;
  background: inherit;
  width: 100%;
  text-align: center; */
`;

export const HeaderLinkScroll = styled(Link)`
  cursor: pointer;
  padding: 1.4rem;
  font-family: "Space Mono";
  position: relative;
  font-size: 14px;
  margin-top: 6px;
  color: #05386b;
  /* color: ${CONSTANTS.colors.persephoneWhite}; */
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    padding: 0.8rem;
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
    transition: transform 0.3s ease-out;
    transform: scaleX(0);
    transform-origin: bottom left;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
