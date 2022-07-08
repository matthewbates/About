import React from "react";
import { CardContainer } from "./CardElements";
import { useInView } from "react-intersection-observer";
import classnames from "classnames";

export default function Card({ classes, children, styleOverrides }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <CardContainer styleOverrides={styleOverrides}>
      <div
        ref={ref}
        className={classnames({ animate: inView }, classes, "content")}
      >
        {children}
      </div>
    </CardContainer>
  );
}
