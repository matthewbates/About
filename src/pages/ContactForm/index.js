import React from "react";
import Contact from "../../components/Contact";
import {
  FormSection,
  FormContainer,
  FormContainerDivRight,
  FormH1,
} from "./ContactFormElements";

export default function ContactForm() {
  return (
    <FormSection id="Contact" data-aos="fade-left">
      <FormContainer>
        <FormContainerDivRight>
          <FormH1>Contact</FormH1>
          <Contact />
        </FormContainerDivRight>
      </FormContainer>
    </FormSection>
  );
}
