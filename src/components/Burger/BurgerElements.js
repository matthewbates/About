import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const StyledBurger = styled.div`
  display: flex;
  z-index: 996;
  color: ${({ open }) =>
    open
      ? `${CONSTANTS.colors.persephoneWhite}`
      : `${CONSTANTS.colors.softBlack}`};

  @media screen and (min-width: 820px) {
    display: none;
  }
`;
