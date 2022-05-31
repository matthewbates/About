import React from "react";
import Contact from "../../components/Contact";
import {
  FormSection,
  FormContainer,
  FormContainerDiv,
  FormContainerText,
  FormContainerDivRight,
} from "./ContactFormElements";

export default function ContactForm() {
  return (
    <FormSection id="Contact" data-aos="fade-left">
      <FormContainer>
        <FormContainerDiv>
          <h2>Contact Me</h2>
          <FormContainerText>
            Thanks for getting here. If you think I can contribute to your team,
            do not hesitate to write me. otherwise I would love to receive your
            comments and suggestions to continue growing professionally.
          </FormContainerText>
        </FormContainerDiv>
        <FormContainerDivRight>
          <Contact />
        </FormContainerDivRight>
      </FormContainer>
    </FormSection>
  );
}
