import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 3rem;
  margin-bottom: 3rem;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  border-radius: 8px;
  max-width: 90%;
  width: 550px;
  background: inherit;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 2px;
  border: none;
`;

export const H2 = styled.h2`
  color: ${CONSTANTS.colors.persephoneWhite};
  text-transform: uppercase;
  display: flex;
  font-family: "Arial";
  justify-content: center;
  margin-top: 2rem;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5em;
  margin-top: 1em;
  font-family: "Arial";
  font-size: 14px;
  color: ${CONSTANTS.colors.persephoneWhite};
`;

export const FormInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  border: ${({ error }) => (error ? "2px solid red" : "none")};

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  font-family: "Arial";
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  resize: none;
  border: ${({ error }) => (error ? "2px solid red" : "none")};
  border-radius: 8px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const FormSubmitBtn = styled.button`
  display: flex;
  margin: auto;
  margin-top: 1em;
  width: 100%;
  justify-content: center;
  max-width: 200px;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid lightgray;
  transition: 0.3s;
  font-family: "Arial";
  text-transform: uppercase;

  &:hover {
    background: inherit;
    color: ${CONSTANTS.colors.persephoneWhite};
  }
`;

export const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-top: 0.5em;
  color: red;
  font-size: 14px;
  font-weight: bold;
`;
