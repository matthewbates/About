import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader/Loader";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  const [loadingScreen, setLoadingScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingScreen(false), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      {loadingScreen ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Projects />
        </>
      )}
    </div>
  );
}
