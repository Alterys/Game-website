import React from "react";
import styles from "./SnakeSegment.module.css";

const SnakeSegment = ({ x, y }) => {
  return <div className={styles.snakeSegment} style={{ left: x * 30, top: y * 30 }} />;
};

export default SnakeSegment;