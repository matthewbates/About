import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import CONSTANTS from "../../utils/constants";

// export const ContactContainer = styled.div`
//   height: 100vh;
// `;

export const Form = styled.form`
  align-items: center;
  margin-right: 1.4rem;
  justify-content: center;

  .submit-button {
    /* margin-left: 14rem; */
    background-color: #363636;
    color: #f1f2f2;
    border-radius: 50px;
    padding: 0.5rem;
    align-items: center;
    line-height: 1;
    font-weight: bold;
    /* width: 108%; */
  }
`;

export const TextInput = styled.input`
  color: #f1f2f2;
  background-color: #363636;
  border: thin solid #f1f2f2;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;
`;

export const EmailInput = styled.input`
  color: #f1f2f2;
  background-color: #363636;
  border: thin solid #f1f2f2;
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;
`;

export const TextArea = styled.textarea`
  color: #f1f2f2;
  border-radius: 0.25rem;
  border: thin solid #f1f2f2;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;
  background-color: transparent;
`;

export const SubmitBtn = styled.button`
  /* border: thin solid #fff; */
  /* margin-left: 2rem; */
  border-radius: 50px;
  padding: 1rem;
  /* margin: 0 0.5rem 0 0; */
  /* display: inline-block; */
  justify-content: center;
  font-size: 1rem;
  /* margin-left: 5rem; */
  line-height: 1;
  cursor: pointer;
  font-weight: bold;
  width: 108%;
  background: ${({ primary }) => (primary ? "#f1f2f2" : "#414042")};
`;

export const FormIcon = styled.i`
  size: 1rem;
  color: #f1f2f2;
`;

export const FormSpan = styled.span`
  color: #f1f2f2;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  /* font-size: 20px; */
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  /* font-size: 20px; */
`;
