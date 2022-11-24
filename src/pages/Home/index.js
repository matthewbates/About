import React, { useState } from "react";
import { HomeContainer } from "./HomeElements";
import Navbar from "../../components/Navbar";
import Intro from "../Intro";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Testimonials from "../Testimonials";
import Contact from "../ContactForm";
import Footer from "../../components/Footer";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleTheme = () => {
    let element = document.body;
    element.classList.toggle("dark");
    setIsClicked(!isClicked);
  };

  return (
    <HomeContainer>
      <Navbar toggleTheme={toggleTheme} isClicked={isClicked} />
      <Intro isClicked={isClicked} />
      <About isClicked={isClicked} />
      <Skills isClicked={isClicked} />
      <Projects isClicked={isClicked} />
      {/* <Testimonials isClicked={isClicked} /> */}
      <Contact isClicked={isClicked} />
      <Footer />
    </HomeContainer>
  );
}
