import React from "react";
import Carousel from "react-bootstrap/carousel";
import { Container, Img, Wrapper, H3, H4, P } from "./CarouselElements";
import slides from "./data";

export default function CarouselContent() {
  return (
    <Container>
      <Carousel controls={false} interval={6500} variant="dark">
        {slides.map((item, index) => (
          <Carousel.Item key={index} style={{ textAlign: "center" }}>
            <Img
              style={{ width: "139px", borderRadius: "50%" }}
              src={item.image}
            />
            <Wrapper>
              <H3>{item.name}</H3>
              <H4>{item.title}</H4>
              <P>{item.text}</P>
            </Wrapper>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
