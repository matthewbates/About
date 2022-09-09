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

  &:hover {
    border-bottom: 2px solid black;
  }
`;
