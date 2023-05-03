import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const FooterContainer = styled.div`
  background: lightgray;
  width: 100%;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Img = styled.img`
  margin-bottom: 1rem;
  gap: 1rem;
  font-size: 1.6rem;
  text-decoration: none;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
`;

export const FooterText = styled.div`
  align-items: center;
  color: black;
`;

export const CreditWrapper = styled.div`
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

export const Credit = styled.div`
  margin-top: -1rem;
`;
