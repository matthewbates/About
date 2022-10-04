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

export const FormH3 = styled.h3`
  margin-top: 4rem;
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
  width: 50%;
  padding: 15px;
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
  width: 50%;
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
  width: 50%;
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

// export const FormContainer = styled.div`
//   /* padding: 2rem 2rem;
//   border: 2.5px solid ${CONSTANTS.colors.persephoneWhite};
//   text-align: center;

//   @media screen and (max-width: 768px) {
//     padding: 1rem 1rem;
//   } */
// `;

// export const Form = styled.form`
//   align-items: center;
//   margin-right: 1.4rem;
//   justify-content: center;
//   line-height: 20px;

//   .submit-button {
//     justify-content: center;
//     margin-left: 1rem;
//     width: 100%;
//     cursor: pointer;
//     text-transform: uppercase;
//     border: none;
//     padding: 20px;
//     font-weight: 900;
//     font-size: 14px;
//     letter-spacing: 5px;
//     transition: transform 0.25s;

//     &:hover {
//       box-shadow: none;
//       transform: scale(1.02);
//     }
//   }
// `;

// export const TextInput = styled.input`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   border-radius: 4px;
//   border: 1px solid white;
//   padding: 15px;
//   margin-bottom: 10px;
//   font-size: 14px;
//   background-color: transparent;
//   color: ${CONSTANTS.colors.white};
//   resize: none;
// `;

// export const EmailInput = styled.input`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   border-radius: 4px;
//   border: 1px solid white;
//   padding: 15px;
//   margin-bottom: 10px;
//   font-size: 14px;
//   background-color: transparent;
//   color: ${CONSTANTS.colors.white};
//   resize: none;
// `;

// export const TextArea = styled.textarea`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   border-radius: 4px;
//   border: 1px solid white;
//   padding: 15px;
//   margin-bottom: 10px;
//   font-size: 14px;
//   background-color: transparent;
//   color: ${CONSTANTS.colors.white};
//   resize: none;
// `;

// export const FormIcon = styled.i`
//   size: 1rem;
//   color: #f1f2f2;
// `;

// export const FormLabel = styled.label`
//   display: flex;
//   line-height: 2;
//   font-size: 14px;
//   font-weight: 200; ;
// `;

// export const FormBtn = styled.button`

// `
