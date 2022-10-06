import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import Sterling from "./pages/Sterling";

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
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <ContactForm />
          <Footer />
        </>
      )}

      <Router>
        <Routes>
          <Route path="/sterling" element={<Sterling />} />
        </Routes>
      </Router>
    </div>
  );
}
