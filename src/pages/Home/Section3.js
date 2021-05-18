import React from "react";
import Button from "../../components/Button";
import VectorImage from "../../components/VectorImage";
import { colors, sizes } from "../../utility";
import styles from "../pages.module.css";

let Image_Text = ({ img, text }) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          transform: "translateX(-10px)",
          width: "20%",
        }}
      >
        <img
          alt="bg"
          src={`${process.env.PUBLIC_URL}/images/` + img}
          height="100%"
          width="100%"
        />
      </div>

      <div
        style={{
          color: "white",
          justifySelf: "center",
          alignSelf: "center",
          paddingLeft: "25px",
          fontSize: sizes.medium,
          fontWeight: 500,
          width: "80%",
        }}
      >
        {text}
      </div>
    </div>
  );
};
function Section3(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        position: "relative",
      }}
    >
      <VectorImage
        src="vectors/section3_boy.svg"
        width="15%"
        bottom={0}
        left={0}
        style={{ transform: "translateY(50px)" }}
      />
      <VectorImage
        src="vectors/section3_lamps.svg"
        width="12%"
        top={0}
        left={0}
      />
      <div
        style={{
          display: "flex",
          padding: "8vw 5vw 0 20vw",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: sizes.huge,
            fontWeight: 700,
            padding: "50px 0px",
          }}
        >
          Why We Are Here ?
        </div>
        <div
          style={{
            backgroundColor: "black",
            borderRadius: "30px",
            width: "fit-content",
            height: "fit-content",
            alignSelf: "center",
            marginLeft: "40px",
          }}
        >
          <Image_Text
            img="section3_1.png"
            text="We Are Here To Save Your Time From Preparring Meals"
          />
          <Image_Text
            img="section3_2.png"
            text="We Are Here To Provide You The Healthy Food At The Lowest Cost Possible"
          />
          <Image_Text
            img="section3_3.png"
            text="We Are Here To Show You That Diet Is Way Better Than Medicine"
          />
        </div>
      </div>
    </div>
  );
}

export default Section3;
