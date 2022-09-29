import React from "react";
import Contact from "../../components/Contact";
import {
  FormSection,
  FormContainer,
  FormContainerDivRight,
  FormH3,
} from "./ContactFormElements";

export default function ContactForm() {
  return (
    <FormSection id="Contact" data-aos="fade-left">
      <FormContainer>
        <FormContainerDivRight>
          <FormH3>Contact</FormH3>
          <Contact />
        </FormContainerDivRight>
      </FormContainer>
    </FormSection>
  );
}
