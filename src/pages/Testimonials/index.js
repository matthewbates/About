import React from "react";
import { TestimonialContainer, TestimonialH2 } from "./TestimonialElements";
import Carousel from "../../components/CarouselContent";

export default function Testimonials({ isClicked }) {
  return (
    <TestimonialContainer id="Testimonials">
      <TestimonialH2>Testimonials</TestimonialH2>
      <Carousel />
    </TestimonialContainer>
  );
}
