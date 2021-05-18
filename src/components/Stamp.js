import React from "react";

function Stamp(props) {
  return (
    <div
      style={{
        width: "10vw",
        height: "10vw",
      }}
    >
      <img
        alt="bg"
        src={`${process.env.PUBLIC_URL}/images/section1_stamp.png`}
        height="100%"
        width="100%"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default Stamp;
