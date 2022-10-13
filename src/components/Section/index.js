import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <motion.div ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          //   transition: "all 1s ease-in-out",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </motion.div>
  );
}
