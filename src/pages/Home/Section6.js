import React from "react";
import { sizes } from "../../utility";

function Section6(props) {
  return (
    <div
      style={{ backgroundColor: "black", padding: "20px 50px", color: "white" }}
    >
      <div className="logo">FITZY.in</div>
      <div style={{ fontSize: sizes.small, width: "50%", margin: "40px 0" }}>
        Fitzy is a subscription based online food delivery site, Which serves
        diet food packages to hostel students.
        <br />
        <br /> Fitzy also provide a single spot solution to all fitness needs
        like music and videos etc.
        <br />
        <br /> Welcome To Fitzy Family.
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "fit-content",
          borderRadius: "10px",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/icons/fb.png`}
          alt="bg"
          width="50px"
          height="100%"
          style={{ marginRight: "10px" }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/icons/insta.png`}
          alt="bg"
          width="50px"
          height="100%"
          style={{ marginRight: "10px" }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/icons/twitter.png`}
          alt="bg"
          width="50px"
          height="100%"
          style={{ transform: "translateY(4px)", marginRight: "10px" }}
        />
      </div>
    </div>
  );
}

export default Section6;
