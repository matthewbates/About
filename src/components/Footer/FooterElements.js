import styled from "styled-components";
import { Link } from "react-scroll";
import CONSTANTS from "../../utils/constants";

export const FooterContainer = styled.div`
  background-color: #000;
  width: 100%;
  bottom: 0;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const SocialIcons = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  width: 60px;
`;

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
