import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.6rem;
  text-decoration: none;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
`;

export const SocialIconLink = styled.a`
  color: ${CONSTANTS.colors.persephoneWhite};
`;
