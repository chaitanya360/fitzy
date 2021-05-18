import React from "react";
import { colors, sizes } from "../utility";

function Button({ bg_color = colors.green, style }) {
  return (
    <div
      style={{
        backgroundColor: bg_color,
        color: "white",
        borderRadius: "20px",
        padding: "10px 15px",
        fontWeight: 600,
        fontSize: sizes.medium,
        width: "fit-content",
        fontFamily: "'Roboto', sans-serif",
        ...style,
      }}
    >
      Get Started
    </div>
  );
}

export default Button;
