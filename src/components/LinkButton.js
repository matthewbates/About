import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const BtnLink = styled.button`
  font-family: "Iskoola Pota";
  border-radius: 35px;
  background: ${({ primary }) => (primary ? "#414042" : "#010606")};
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#414042" : "#f1f2f2")};
  font-size: ${({ fontBig }) => (fontBig ? "18px" : "16px")};
  cursor: pointer;
  /* justify-content: center;
  align-items: center; */
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;
