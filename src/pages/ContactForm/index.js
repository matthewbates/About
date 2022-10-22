import React from "react";
import Forms from "../../components/Form";
import { ContactContainer, FormH3 } from "./ContactFormElements";

export default function ContactForm({ isClicked }) {
  return (
    <ContactContainer id="Contact" data-aos="fade-left" isClicked={isClicked}>
      <Forms />
    </ContactContainer>
  );
}
