import React from "react";
import {
  TextInput,
  EmailInput,
  TextArea,
  FormContainer,
  Form,
  FormLabel,
  FormButton,
} from "./ContactElements";
import emailjs from "emailjs-com";
import swal from "sweetalert2";

const SERVICE_ID = "service_7j2rpfd";
const TEMPLATE_ID = "template_bl3e1rq";
const USER_ID = "pxTQ3Ga0lBOJ4vGzM";

// const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
// const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
// const USER_ID = process.env.REACT_APP_USER_ID;

export default function Contact() {
  function handleOnSubmit(e) {
    e.preventDefault();
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

  return (
    <FormContainer>
      <Form onSubmit={handleOnSubmit}>
        <FormLabel className="required">Full Name</FormLabel>
        <TextInput type="text" name="user_full_name" required />
        <FormLabel className="required">Email Address</FormLabel>
        <EmailInput type="email" name="user_email" required />
        <FormLabel>Phone</FormLabel>
        <TextInput type="text" name="user_phone_number" required />
        <FormLabel>Message</FormLabel>
        <TextArea name="user_message" cols="50" rows="10" required></TextArea>

        <FormButton type="submit" className="submit-button" primary="true">
          Submit
        </FormButton>
      </Form>
    </FormContainer>
  );
}
