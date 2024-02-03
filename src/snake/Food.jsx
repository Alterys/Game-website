import React from "react";
import styles from "./Food.module.css";

const Food = ({ x, y }) => {
  return <div className={styles.food} style={{ left: x * 30, top: y * 30 }} />;
};

export default Food;