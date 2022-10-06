import React from "react";
import Navbar from "../../components/Navbar";
import Intro from "../Intro";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../ContactForm";
import Footer from "../../components/Footer";

export default function index() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
