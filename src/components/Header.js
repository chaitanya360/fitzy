import React from "react";
import styles from "./components.module.css";

function Header(props) {
  return (
    <header
      className="flex_row_space"
      style={{
        padding: "10px 0 10px 20px",
        backgroundColor: "white",
        // position: "sticky",
        top: 0,
        zIndex: 999,
        width: "100%",
        boxShadow: "10px 0 10px grey",
      }}
    >
      <div className="logo">FITZY.in</div>
      <ul className={styles.header_nav}>
        <li>Home</li>
        <li style={{ fontWeight: 600 }}>Sign Up</li>
      </ul>
    </header>
  );
}

export default Header;
