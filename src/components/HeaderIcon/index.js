import React from "react";
import { HeaderIconStyles } from "./HeaderIconElements";

export default function HeaderIcon({ url, img, style, className }) {
  return (
    <HeaderIconStyles>
      <a
        href={url}
        target="_blank"
        className={className}
        rel="noopener noreferrer"
      >
        <img src={img} alt="icon" style={style} />
      </a>
    </HeaderIconStyles>
  );
}
