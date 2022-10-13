import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

export default function Section({ children }) {
  const [ref, isInView] = useInView({ threshold: 0.4, triggerOnce: true });
  const control = useAnimation();

  useEffect(() => {
    isInView ? control.start("visible") : control.start("hidden");
  });

  return (
    <section ref={ref} initial="hidden">
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in-out",
          //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}
