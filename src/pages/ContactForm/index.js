import React from "react";
import Contact from "../../components/Contact";
import {
  FormSection,
  FormContainer,
  FormContainerDiv,
  FormContainerText,
  FormContainerDivRight,
  FormH1,
} from "./ContactFormElements";

export default function ContactForm() {
  return (
    <FormSection id="Contact" data-aos="fade-left">
      <FormContainer>
        {/* <FormContainerDiv>
          <h2>Contact Me</h2>
          <FormContainerText>
            If you think I can contribute to your team, or maybe you'd just want to collaborate, don't hesitate to send me a message!
          </FormContainerText>
        </FormContainerDiv> */}
        <FormContainerDivRight>
          <FormH1>Contact</FormH1>
          <Contact />
        </FormContainerDivRight>
      </FormContainer>
    </FormSection>
  );
}
