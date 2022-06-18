import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer1);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Projects />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  );
}
