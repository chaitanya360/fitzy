import React from "react";
import Button from "../../components/Button";
import { colors, sizes } from "../../utility";
function Section2(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "70px 80px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: sizes.ex_large,
            width: "40%",
            fontWeight: 600,
            fontFamily: "roboto",
          }}
        >
          <span style={{ color: colors.blue }}>Subscribe</span> to Enjoy Variety
          of Healthy Meals
        </div>
        <div
          style={{
            width: "50%",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: sizes.medium,
              fontWeight: 600,
              paddingBottom: "20px",
              borderBottom: "8px solid",
              paddingTop: "10px",
              borderColor: colors.blue,
            }}
          >
            Subscribe to our services to get Delicious Diet meals prepared and
            diliverd at your door step
          </div>
          <div
            style={{
              margin: "auto",
              padding: "50px 0px 0px 30px",
              width: "fit-content",
            }}
          >
            <Button bg_color={colors.blue} />
          </div>
        </div>
      </div>
      {/* images */}
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <img
            alt="bg"
            src={`${process.env.PUBLIC_URL}/images/section2_1.jpg`}
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div style={{ width: "40%" }}>
          <img
            alt="bg"
            src={`${process.env.PUBLIC_URL}/images/section2_2.jpg`}
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div style={{ width: "30%" }}>
          <img
            alt="bg"
            src={`${process.env.PUBLIC_URL}/images/section2_3.jpg`}
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
