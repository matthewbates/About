import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import { FaArrowCircleUp } from "react-icons/fa";

export default function App() {
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 5000);
  }, []);

  return (
    <div className="app">
      {/* {loadingScreen ? (
        <Loader />
      ) : ( */}
      <>
        <Header />
        <Home />
        <About />
        <Projects />
        <ContactForm />
        {/* <ScrollToTop /> */}
      </>
      {/* //  */}
    </div>
  );
}
