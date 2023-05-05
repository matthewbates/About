import React, { useState } from "react";
import { HomeContainer } from "./HomeElements";
import Navbar from "../../components/Navbar";
import Intro from "../Intro";
import About from "../About";
import Skills from "../Skills";
import Project from "../../components/Project";
import Projects from "../Projects";
import Testimonials from "../Testimonials";
import Contact from "../ContactForm";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Project />
      {/* <Projects /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </HomeContainer>
  );
}
