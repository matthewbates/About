import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

export const FormContainer = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .required::after {
    content: "*";
    color: red;
  }
`;

export const FormHeader = styled.h2`
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Lato";
  font-weight: 300;
  text-transform: uppercase;
  color: ${CONSTANTS.colors.persephoneWhite};
`;

export const TextInput = styled.input`
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  color: ${CONSTANTS.colors.persephoneWhite};
  align-items: center;
  width: 45%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  background: transparent;
  resize: none;
  border: 1px solid ${CONSTANTS.colors.persephoneWhite};
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const EmailInput = styled.input`
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  color: ${CONSTANTS.colors.softBlack};
  align-items: center;
  width: 45%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  background: transparent;
  resize: none;
  border: 1px solid ${CONSTANTS.colors.persephoneWhite};
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const TextArea = styled.textarea`
  font-weight: bold;
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  color: ${CONSTANTS.colors.persephoneWhite};
  align-items: center;
  width: 45%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  background: transparent;
  resize: none;
  border: 1px solid ${CONSTANTS.colors.persephoneWhite};
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  line-height: 2rem;
  font-family: "Lato";
  color: ${CONSTANTS.colors.persephoneWhite};
`;

export const FormButton = styled.button`
  border: 1px solid ${CONSTANTS.colors.persephoneWhite};
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20%;
  cursor: pointer;
  text-transform: uppercase;
  padding: 15px;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 5px;
  transition: transform 0.25s;
  margin-top: 1rem;
  margin-bottom: 4rem;
  background: transparent;
  color: ${CONSTANTS.colors.persephoneWhite};

  @media screen and (max-width: 768px) {
    width: 40%;
  }

  &:hover {
    box-shadow: none;
    background: ${CONSTANTS.colors.persephoneWhite};
    color: ${CONSTANTS.colors.royalBlue};
    transition: 200ms ease-in;
  }
`;
