import styled from "styled-components";
import { Link } from "react-scroll";

export const LinksContainer = styled.li`
  color: #fff;
  margin-left: 3.5rem;
  cursor: pointer;
  /* this removes the <li> dots */
  list-style-type: none;
  line-height: 55px;
`;

export const LinkScroll = styled(Link)`
  &:hover {
    text-decoration: 2px solid white underline;
  }
`;
