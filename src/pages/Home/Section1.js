import React from "react";
import Button from "../../components/Button";
import Stamp from "../../components/Stamp";
import { sizes } from "../../utility";
import styles from "../pages.module.css";
function Section1(props) {
  return (
    <div style={{ height: "95vh", position: "relative", width: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          zIndex: -1,
          position: "absolute",
        }}
      >
        <img
          alt="bg"
          src={`${process.env.PUBLIC_URL}/images/section1_bg.png`}
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50vw",
          height: "100%",
          paddingBlock: "80px",
        }}
      >
        <div>
          <Stamp />
        </div>
        <div
          style={{
            fontSize: sizes.huge,
            fontWeight: 700,
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          “Fitness is not just about Workout”
        </div>
        <div
          style={{
            fontSize: sizes.small,
            fontWeight: 500,
            width: "70%",
            textAlign: "center",
            alignSelf: "center",
            margin: "20px",
          }}
        >
          Subscribe to our services to get Delicious Diet meals prepared and
          diliverd at your door step
        </div>
        <div style={{ alignSelf: "center", margin: "50px" }}>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Section1;
