import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .required::after {
//     content: "*";
//     color: red;
//   }
// `;

// export const FormHeader = styled.h2`
//   margin-top: 2rem;
//   font-family: "Lato";
//   text-transform: uppercase;
//   color: ${CONSTANTS.colors.persephoneWhite};
// `;

// export const TextInput = styled.input`
//   font-family: "Arial";
//   display: flex;
//   justify-content: center;
//   color: ${CONSTANTS.colors.persephoneWhite};
//   align-items: center;
//   width: 40%;
//   padding: 10px;
//   margin-bottom: 15px;
//   font-size: 16px;
//   background: transparent;
//   resize: none;
//   border: 1px solid ${CONSTANTS.colors.persephoneWhite};
//   border-radius: 6px;

//   &:focus {
//     outline: none;
//   }

//   @media screen and (max-width: 768px) {
//     width: 70%;
//   }
// `;

// export const EmailInput = styled.input`
//   font-family: "Poppins";
//   display: flex;
//   justify-content: center;
//   color: ${CONSTANTS.colors.persephoneWhite};
//   align-items: center;
//   width: 40%;
//   padding: 10px;
//   margin-bottom: 10px;
//   font-size: 16px;
//   background: transparent;
//   resize: none;
//   border: 1px solid ${CONSTANTS.colors.persephoneWhite};
//   border-radius: 6px;

//   &:focus {
//     outline: none;
//   }

//   @media screen and (max-width: 768px) {
//     width: 70%;
//   }
// `;

// export const FormLabel = styled.label`
//   line-height: 2rem;
//   font-family: "Lato";
//   color: ${CONSTANTS.colors.persephoneWhite};
// `;

// export const FormButton = styled.button`
//   border: 1px solid ${CONSTANTS.colors.persephoneWhite};
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   width: 20%;
//   cursor: pointer;
//   text-transform: uppercase;
//   padding: 15px;
//   font-weight: 900;
//   font-size: 14px;
//   letter-spacing: 5px;
//   transition: transform 0.25s;
//   margin-top: 1rem;
//   margin-bottom: 2rem;
//   background: transparent;
//   color: ${CONSTANTS.colors.persephoneWhite};

//   @media screen and (max-width: 768px) {
//     width: 40%;
//   }

//   &:hover {
//     box-shadow: none;
//     background: #fff;
//     color: #05386b;
//     transition: 200ms ease-in;
//   }
// `;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  margin: 2em;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
  border-radius: 8px;
  max-width: 90%;
  width: 400px;
  background: inherit;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 2px;
`;

export const H2 = styled.h2`
  color: ${CONSTANTS.colors.persephoneWhite};
  text-transform: uppercase;
  display: flex;
  font-family: "Lato";
  font-weight: 600;
  justify-content: center;
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
  border: 1px solid lightgray;

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
  margin-bottom: 10px;
  font-size: 16px;
  resize: none;
  border: 1px solid lightgray;
  border-radius: 8px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const FormSubmitBtn = styled.button`
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 10px;
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
