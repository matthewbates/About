import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Audio from "./components/Audio";
import Loader from "./components/Loader";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {/* <Audio /> */}
          <Home />
          <About />
          <Skills />
          <Projects />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  );
}
