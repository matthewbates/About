import React from "react";

export default function Message({ msg }) {
  let styles = {
    padding: "1rem",
    margin: "1rem 0",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    backgroundColor: "tan",
    borderRadius: "10px",
  };

  return (
    <div style={styles}>
      <p>{msg}This holds the message</p>
    </div>
  );
}
