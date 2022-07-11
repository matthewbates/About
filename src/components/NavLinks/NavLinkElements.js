import styled from "styled-components";
import { Link } from "react-scroll";
import CONSTANTS from "../../utils/constants";

export const LinksContainer = styled.li`
  color: #fff;
  align-items: center;
  cursor: pointer;
  list-style-type: none;
  line-height: 60px;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  font-family: "Quicksand" sans-serif;
`;

export const LinkScroll = styled(Link)`
  &:hover {
    text-decoration: 2px solid white underline;
  }
`;
