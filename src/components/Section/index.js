import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in-out",
        }}
      >
        {children}
      </span>
    </section>
  );
}
