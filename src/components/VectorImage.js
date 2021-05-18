import React from "react";

function VectorImage({
  width = "10%",
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
  src,
  style,
}) {
  return (
    <div
      style={{
        position: "absolute",
        width,
        height: "fit-content",
        top,
        right,
        left,
        bottom,
        zIndex: 2,
        ...style,
      }}
    >
      <img
        alt="bg"
        src={`${process.env.PUBLIC_URL}/` + src}
        height="100%"
        width="100%"
      />
    </div>
  );
}

export default VectorImage;
