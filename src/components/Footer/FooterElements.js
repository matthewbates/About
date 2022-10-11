import styled from "styled-components";
import { Link } from "react-scroll";
import CONSTANTS from "../../utils/constants";

export const FooterContainer = styled.div`
  background: ${CONSTANTS.colors.softBlack};
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

export const FooterWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SocialIcons = styled.div``;

export const SocialIconLink = styled.a`
  color: ${CONSTANTS.colors.persephoneWhite};
  font-size: 24px;
`;

export const FooterText = styled.div`
  align-items: center;
  color: ${CONSTANTS.colors.persephoneWhite};
`;

export const ScrollButton = styled(Link)`
  .arrow {
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px 5px;
    border: 1px solid white;
    cursor: pointer;
  }
`;

export const FooterCredit = styled.div`
  font-family: "Lato";
  line-height: 1;

  a {
    padding: 10px;
    font-size: 14px;
    color: ${CONSTANTS.colors.persephoneWhite};
    text-decoration: none;

    &:hover {
      color: #5cdb95;
      transition: 200ms all ease-in;
    }
  }
`;
