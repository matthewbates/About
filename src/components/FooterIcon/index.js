import React from "react";
import { FooterIconStyles } from "./FooterIconElements";

export default function FooterIcon(url, className, img, style) {
  return (
    <FooterIconStyles>
      <a
        href={url}
        target="_blank"
        className={className}
        rel="noopener noreferrer"
      >
        <img src={img} alt="icon" style={style} />
      </a>
    </FooterIconStyles>
  );
}
