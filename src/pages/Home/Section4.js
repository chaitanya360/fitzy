import React from "react";
import { sizes } from "../../utility";

let ImageText = ({ img, text, width = "30vw" }) => {
  return (
    <div
      style={{
        display: "flex",
        width,
        position: "relative",
      }}
    >
      <div
        style={{
          zIndex: "-1",
          flex: 1,
        }}
      >
        <img
          alt="bg"
          src={`${process.env.PUBLIC_URL}/images/` + img}
          style={{ objectFit: "conver" }}
          height="100%"
          width="100%"
        />
      </div>
      <div
        style={{
          color: "white",
          padding: "50px 23% 30px 50px",
          alignSelf: "flex-end",
          fontSize: sizes.medium,
          fontWeight: 500,
          width: "100%",
          height: "fit-content",
          position: "absolute",
        }}
      >
        {text}
      </div>
    </div>
  );
};

function Section4(props) {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "50%",
          position: "absolute",
          bottom: "0px",
          opacity: 0.8,
        }}
      >
        <img
          alt="bg"
          src={`${process.env.PUBLIC_URL}/images/section4_bottom_gredient.png`}
          style={{ objectFit: "cover", zIndex: "10" }}
          height="100%"
          width="100%"
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "50%",
          position: "absolute",
          top: "0px",
        }}
      >
        <img
          alt="bg"
          src={`${process.env.PUBLIC_URL}/images/section4_top_gredient.png`}
          style={{ objectFit: "cover", zIndex: "10" }}
          height="100%"
          width="100%"
        />
      </div>
      <ImageText img="section4_1.png" text="It Starts With Just Subscribing" />
      <ImageText
        img="section4_2.png"
        text="Then We Deliver Your Package To You Every Day"
      />
      <ImageText
        img="section4_3.png"
        text="At Your Place, At Your Time"
        width="40%"
      />
      <div
        style={{
          position: "absolute",
          color: "white",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: sizes.huge,
            margin: "30px 80px",
          }}
        >
          How We Do It ?
        </div>
        <div
          style={{
            fontWeight: 500,
            margin: "30px 80px",
            fontSize: sizes.large,
          }}
        >
          Get Started
        </div>
      </div>
    </div>
  );
}

export default Section4;
