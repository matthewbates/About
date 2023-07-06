import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const LinkScroll = styled(Link)`
  cursor: pointer;
  font-family: "Arial";
  font-size: 1em;
  color: ${CONSTANTS.colors.persephoneWhite};
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: darkgray;
  }
`;
