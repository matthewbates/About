import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "react-scroll/modules";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", toggleVisibility);

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
}
