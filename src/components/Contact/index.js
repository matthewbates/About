import React, { useState } from "react";
import {
  TextInput,
  EmailInput,
  TextArea,
  Submit,
  Form,
} from "./ContactElements";
import Message from "../../pages/ContactForm/Message";

const FORM_ENDPOINT = "";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  function handleOnSubmit(e) {
    e.preventDefault();
  }

  return (
    // need route for smooth scroll here id="Contact"
    <>
      <Form onSubmit={handleOnSubmit}>
        <TextInput
          type="text"
          name="name"
          placeholder="Your name..."
          // onChange={handleChange}
          // value={form.name}
          // required
          // onBlur={handleBlur}
        />
        {/* {errors.name && <p style={styles}>{errors.name}</p>} */}
        <EmailInput
          type="email"
          name="email"
          placeholder="Your email..."
          // onChange={handleChange}
          // value={form.email}
          // required
          // onBlur={handleBlur}
        />
        {/* {errors.email && <p style={styles}>{errors.email}</p>} */}

        <TextArea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Your message..."
          // onChange={handleChange}
          // value={form.comments}
          // required
          // onBlur={handleBlur}
        ></TextArea>
        {/* {errors.comments && <p style={styles}>{errors.comments}</p>} */}

        <Submit onClick={() => console.log("hello")}>Send</Submit>
      </Form>
      <Message />
    </>
  );
}
