import React from "react";
import styles from "./Project.module.css";
import Header1 from "./Header1/Header1";
import Footer from "./Footer/Footer";
import Header2 from "./Header2/Header2";
export default function project() {
  return (
  <div className={styles.main}>
    <div><Header1 /></div>
    <div><Header2 /></div>
    <div><Footer /></div>
  </div>
  );
}
