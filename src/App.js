import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import HomePage from "./pages/Home";
import Projects from "./pages/Projects";
import Sterling from "./pages/Sterling";
import Backpacking from "./pages/Backpacking";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sterling" element={<Sterling />} />
            <Route path="/backpacking" element={<Backpacking />} />
          </Routes>
        </Router>
      {/* )} */}
    </div>
  );
}
