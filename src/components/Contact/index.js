import React, { useState } from "react";
import {
  TextInput,
  EmailInput,
  TextArea,
  FormContainer,
  Form,
  FormIcon,
  FormSpan,
  ArrowForward,
  ArrowRight,
} from "./ContactElements";
import emailjs from "emailjs-com";
import swal from "sweetalert2";

const SERVICE_ID = "service_7j2rpfd";
const TEMPLATE_ID = "template_bl3e1rq";
const USER_ID = "pxTQ3Ga0lBOJ4vGzM";

export default function Contact() {
  const [hover, setHover] = useState(false);

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

  function toggleHover() {
    setHover(!hover);
  }

  return (
    <FormContainer>
      <Form id="myForm" onSubmit={handleOnSubmit}>
        <FormIcon className="fa-solid fa-user" />
        <FormSpan> Name</FormSpan>
        <TextInput type="text" name="user_name" required />
        <FormIcon className="fa-solid fa-at"></FormIcon>
        <FormSpan> Email</FormSpan>
        <EmailInput type="email" name="user_email" required />
        <FormIcon className="fa-solid fa-message" />
        <FormSpan> Message</FormSpan>
        <TextArea name="user_message" cols="50" rows="10" required></TextArea>
        <button
          type="submit"
          className="submit-button"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          primary="true"
        >
          SEND
          {hover ? <ArrowForward /> : <ArrowRight />}
        </button>
      </Form>
    </FormContainer>
  );
}
