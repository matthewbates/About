import React, { useState } from "react";
import {
  TextInput,
  EmailInput,
  TextArea,
  Submit,
  Form,
  FormIcon,
  FormSpan,
  ArrowForward,
  ArrowRight,
} from "./ContactElements";
import emailjs from "email-js";
import swal from "sweetalert2";

const templateParams = {
  user_email: "user_email_value",
  user_name: "user_name_value",
  user_message: "user_message_value",
};

const SERVICE_ID = "service_7j2rpfd";
const TEMPLATE_ID = "template_bl3e1rq";
const USER_ID = "pxTQ3Ga0lBOJ4vGzM";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);

  function handleOnSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
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
    <>
      <Form id="myForm" onSubmit={handleOnSubmit}>
        <FormIcon className="fa-solid fa-user" />
        <FormSpan> Name</FormSpan>
        <TextInput type="text" name="user_name" />
        <FormIcon className="fa-solid fa-at"></FormIcon>
        <FormSpan> Email</FormSpan>
        <EmailInput type="email" name="user_email" />
        <FormIcon className="fa-solid fa-message" />
        <FormSpan> Message</FormSpan>
        <TextArea name="comments" cols="50" rows="10"></TextArea>

        <Submit
          type="submit"
          onClick={() => console.log("hello")}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          primary="true"
        >
          Send {hover ? <ArrowForward /> : <ArrowRight />}
        </Submit>
      </Form>
    </>
  );
}
