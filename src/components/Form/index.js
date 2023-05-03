import React from "react";
import {
  FormContainer,
  Form,
  H2,
  FormLabel,
  FormInput,
  TextInput,
  FormHeader,
  EmailInput,
  TextArea,
  FormButton,
  FormSubmitBtn,
} from "./ContactElements";
import emailjs from "emailjs-com";
import swal from "sweetalert2";

const SERVICE_ID = "service_7j2rpfd";
const TEMPLATE_ID = "template_bl3e1rq";
const USER_ID = "pxTQ3Ga0lBOJ4vGzM";

export default function Forms() {
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
    // <>
    //   <Form onSubmit={handleOnSubmit}>
    //     <FormHeader>Contact</FormHeader>
    //     <FormLabel style={{ marginTop: "1rem" }} className="required">
    //       Full Name
    //     </FormLabel>
    //     <TextInput type="text" name="user_full_name" required />
    //     <FormLabel className="required">Email Address</FormLabel>
    //     <EmailInput type="email" name="user_email" required />
    //     <FormLabel>Phone</FormLabel>
    //     <TextInput type="text" name="user_phone_number" />
    //     <FormLabel className="required">Message</FormLabel>
    //     <TextArea name="user_message" cols="50" rows="6" required></TextArea>

    //     <FormButton type="submit" className="submit-button" primary="true">
    //       Submit
    //     </FormButton>
    //   </Form>
    // </>
    <FormContainer>
      <H2>Contact</H2>
      <Form onSubmit={handleOnSubmit}>
        <FormLabel>Full Name</FormLabel>
        <FormInput type="text" name="user_full_name" />
        <FormLabel>Email Address</FormLabel>
        <FormInput type="email" name="user_email" />
        <FormLabel>Phone</FormLabel>
        <FormInput type="text" name="user_phone_number" />
        <FormLabel>Message</FormLabel>
        <TextArea name="user_message" cols="50" rows="6" required></TextArea>
        <FormSubmitBtn type="submit" className="submit-button" primary="true">
          Submit
        </FormSubmitBtn>
      </Form>
    </FormContainer>
  );
}
