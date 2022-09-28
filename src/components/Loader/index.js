import React, { useEffect } from "react";
import { LoadingScreen } from "./LoaderElements";
import gsap from "gsap";

export default function Loader() {
  useEffect(() => {
    gsap.from(".loading-title", {
      y: 100,
      opacity: 0,
      ease: "slow",
      duration: 2.3,
    });
    gsap.from(".loading-number", {
      duration: 2.5,
      textContent: 0,
      ease: "power1.in",
      snap: { textContent: 1 },
    });
    gsap.to([".loading-title", ".loading-number"], {
      delay: 2.8,
      duration: 1,
      opacity: 0,
    });
  }, []);

  return (
    <LoadingScreen>
      <div className="loading-container">
        <h1
          style={{ fontFamily: "Cormorant Garamond" }}
          className="loading-title"
        >
          Loading
        </h1>
        <h1
          style={{ fontFamily: "Cormorant Garamond" }}
          className="loading-number"
        >
          100%
        </h1>
      </div>
    </LoadingScreen>
  );
}
