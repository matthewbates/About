import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const FormContainer = styled.div`
  padding: 2rem 2rem;
  border: 2.5px solid ${CONSTANTS.colors.persephoneWhite};
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

export const Form = styled.form`
  align-items: center;
  margin-right: 1.4rem;
  justify-content: center;
  line-height: 20px;

  .submit-button {
    cursor: pointer;
    padding: 10px;
    background: transparent;
    border: 2px solid ${CONSTANTS.colors.persephoneWhite};
    color: ${CONSTANTS.colors.persephoneWhite};
    font-weight: bold;
    text-align: left;
    justify-content: left;
  }
`;

export const TextInput = styled.input`
  color: #f1f2f2;
  background: transparent;
  border: 2px solid ${CONSTANTS.colors.persephoneWhite};
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;

  .highlightme {
    background-color: white;
  }
`;

export const EmailInput = styled.input`
  color: #f1f2f2;
  background: transparent;
  border: 2px solid ${CONSTANTS.colors.persephoneWhite};
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;
`;

export const TextArea = styled.textarea`
  color: #f1f2f2;
  background: transparent;
  border: 2px solid ${CONSTANTS.colors.persephoneWhite};
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;
`;

export const SubmitBtn = styled.button`
  border-radius: 50px;
  justify-content: center;
  font-size: 1rem;
  line-height: 1;
  font-weight: bold;
  background: ${({ primary }) => (primary ? "#f1f2f2" : "#414042")};
`;

export const FormIcon = styled.i`
  size: 1rem;
  color: #f1f2f2;
`;

export const FormSpan = styled.span`
  color: #f1f2f2;
`;
