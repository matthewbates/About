import styled from "styled-components";
import CONSTANTS from "../../utils/constants";

// export const ContactContainer = styled.div`
//   height: 100vh;
// `;

export const Form = styled.form`
  align-items: center;
  margin-right: 1.4rem;
`;

export const TextInput = styled.input`
  color: black;
  /* border: thin solid #dedede; */
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;
  /* background-color: transparent; */
`;

export const EmailInput = styled.input`
  color: black;
  /* border: thin solid #dedede; */
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;
  background-color: transparent;
`;

export const TextArea = styled.textarea`
  /* border: thin solid #dedede; */
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1;
  background-color: transparent;
`;

export const Submit = styled.button`
  /* border: thin solid #fff; */
  /* margin-left: 2rem; */
  border-radius: 0.25rem;
  padding: 1rem;
  /* margin: 0 0.5rem 0 0; */
  /* display: inline-block; */
  font-size: 1rem;
  margin-left: 5rem;
  line-height: 1;
  text-transform: none;
  text-decoration: none;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  font-weight: bold;
  width: 50%;
`;
