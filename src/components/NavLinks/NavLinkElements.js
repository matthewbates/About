import styled from "styled-components";
import { Link } from "react-scroll";

export const LinksContainer = styled.li`
  /* margin-top: 5px; */
  color: #fff;
  align-items: center;
  cursor: pointer;
  list-style-type: none;
  line-height: 45px;
  justify-content: center;
  text-align: center;
  padding: 0 0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  font-family: "Lato";

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const LinkScroll = styled(Link)`
  &:hover {
    text-decoration: 2px solid white underline;
  }
`;
