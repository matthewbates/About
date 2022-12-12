import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const LinkScroll = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  margin: 2rem;
  font-family: "Space Mono";
  position: relative;
  font-size: 14px;
  margin-top: 6px;
  color: ${CONSTANTS.colors.persephoneWhite};
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none !important;

  &:hover {
    color: darkgray;
  }
`;
