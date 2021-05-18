import React from "react";
import Button from "../../components/Button";
import VectorImage from "../../components/VectorImage";
import { colors, sizes } from "../../utility";
import styles from "../pages.module.css";

let Text_Image = ({ img, text, width = "23%", style }) => {
  return (
    <div
      style={{
        width,
        margin: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontSize: sizes.medium,
          fontWeight: 500,
          textAlign: "center",
          padding: "30px",
          paddingBottom: "10px",
          flex: 1,
          ...style,
        }}
      >
        {text}
      </div>
      <div style={{ width: "100%", height: "15vw" }}>
        <img
          alt="bg"
          src={`${process.env.PUBLIC_URL}/` + img}
          style={{ objectFit: "cover" }}
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};
function Section5(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <VectorImage
        src="vectors/section3_lamps.svg"
        width="12%"
        top={0}
        left={0}
      />
      <VectorImage
        src="vectors/section5_rope_lamps.png"
        width="20%"
        right="0px"
      />
      <VectorImage
        src="vectors/section5_left_leaf.svg"
        width="15%"
        top="50%"
        left="0px"
        style={{ transform: "translateY(-50%)" }}
      />
      <VectorImage
        src="vectors/section5_right_leaf.svg"
        width="12%"
        top="50%"
        right="0px"
        style={{ transform: "translateY(-50%)", zIndex: -1 }}
      />
      <VectorImage
        src="vectors/section5_tree_pot.svg"
        width="8%"
        bottom={0}
        right="0px"
        style={{ transform: "translateY(25px)", zIndex: 1 }}
      />
      <VectorImage
        src="vectors/section5_trees.svg"
        width="8%"
        left={0}
        bottom={0}
        style={{ transform: "translateY(10px)", zIndex: -1 }}
      />
      <div
        style={{
          fontSize: sizes.ex_large,
          padding: "50px 200px",
          fontWeight: 600,
          width: "100%",
          textAlign: "center",
        }}
      >
        <span style={{ color: colors.green }}>Wait !</span> There Are Rewards
        Too.
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          height: "fit-content",
        }}
      >
        <Text_Image
          text="Complete the given tasks"
          img="images/section5_1.png"
        />
        <Text_Image
          text="Earn points by completing tasks"
          img="images/section5_2.png"
        />
        <Text_Image
          text="Redeem you points to get reward coupons"
          img="images/section5_3.png"
        />
      </div>
      <div
        style={{
          width: "fit-content",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ transform: "translateY(5px)", width: "150px" }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/section5_gifts.png`}
            height="100%"
            width="100%"
          />
        </div>
        <Button style={{ paddingInline: "50px" }} />
      </div>
    </div>
  );
}

export default Section5;
