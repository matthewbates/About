import { useState } from "react";

import { FaExclamationTriangle } from "react-icons/fa";

import {
  FormContainer,
  Form,
  H2,
  FormLabel,
  FormInput,
  TextArea,
  FormSubmitBtn,
  ErrorMessage,
} from "./ContactElements";
import emailjs from "emailjs-com";
import swal from "sweetalert2";

const SERVICE_ID = "service_7j2rpfd";
const TEMPLATE_ID = "template_bl3e1rq";
const USER_ID = "pxTQ3Ga0lBOJ4vGzM";

export default function Forms() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateFormData = (formData) => {
    const errors = {};

    if (!formData.name) {
      errors.name = (
        <>
          <FaExclamationTriangle style={{ color: "yellow" }} /> Please enter
          your full name
        </>
      );
    }

    if (!formData.email) {
      errors.email = (
        <>
          <FaExclamationTriangle style={{ color: "yellow" }} /> Please enter
          your email
        </>
      );
    }

    if (!formData.message) {
      errors.message = (
        <>
          <FaExclamationTriangle style={{ color: "yellow" }} /> Please enter
          your message
        </>
      );
    }

    return errors;
  };

  function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
      message: e.target.message.value,
    };

    const errors = validateFormData(formData);

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (r) => {
          console.log(r.text);
          swal.fire(
            "Message Sent",
            "Matthew will get back to you as soon as he can!",
            "success"
          );
        },
        (error) => {
          console.log(error.text);
          swal.fire("Ooops, something went wrong", error.text, "error");
        }
      );
      e.target.reset();
    }
  }

  return (
    <FormContainer>
      <H2>Contact</H2>
      <Form onSubmit={handleOnSubmit}>
        <FormLabel>Full Name</FormLabel>
        <FormInput type="text" name="name" error={errors.name} />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        <FormLabel>Email Address</FormLabel>
        <FormInput type="email" name="email" error={errors.email} />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <FormLabel>Phone</FormLabel>
        <FormInput type="text" name="number" />
        <FormLabel>Message</FormLabel>
        <TextArea name="message" rows="6" error={errors.message}></TextArea>
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        <FormSubmitBtn type="submit" className="submit-button" primary="true">
          Submit
        </FormSubmitBtn>
      </Form>
    </FormContainer>
  );
}
