import styled from "styled-components";
import CONSTANTS from "../../utils/constants";
import { Link } from "react-scroll";

export const LinkScroll = styled(Link)`
  display: flex;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  margin: 2rem;
  font-family: "Arial";
  font-size: 14px;
  color: ${CONSTANTS.colors.persephoneWhite};
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: darkgray;
  }
`;
