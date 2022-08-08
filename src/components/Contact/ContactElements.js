import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const FormContainer = styled.div`
  /* padding: 2rem 2rem;
  border: 2.5px solid ${CONSTANTS.colors.persephoneWhite};
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;
  } */
`;

export const Form = styled.form`
  align-items: center;
  margin-right: 1.4rem;
  justify-content: center;
  line-height: 20px;

  .submit-button {
    justify-content: center;
    margin-left: 1rem;
    width: 100%;
    cursor: pointer;
    text-transform: uppercase;
    border: none;
    padding: 20px;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 5px;
    transition: transform 0.25s;

    &:hover {
      box-shadow: none;
      transform: scale(1.02);
    }
  }
`;

export const TextInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: transparent;
  color: ${CONSTANTS.colors.white};
  resize: none;
`;

export const EmailInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: transparent;
  color: ${CONSTANTS.colors.white};
  resize: none;
`;

export const TextArea = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: transparent;
  color: ${CONSTANTS.colors.white};
  resize: none;
`;

export const FormIcon = styled.i`
  size: 1rem;
  color: #f1f2f2;
`;

export const FormLabel = styled.label`
  display: flex;
  line-height: 2;
  font-size: 14px;
  font-weight: 200; ;
`;
