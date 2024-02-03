import React from "react";
import styles from "./modal.module.css";
import MenuIcon from "../components/MenuIcon";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RetryGame from "../components/RetryGame";

const Modal = ({ show, message, onRestart }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      {show && <div className={styles.overlay}></div>}
      <div className={`${styles.modal} ${show ? styles.show : ""}`}>
        <p>{message}</p>
        <button
          onClick={() => {
            navigate("/menu");
          }}
        >
          <MenuIcon />
          {t("return")}
        </button>
        <button onClick={onRestart}>
          <RetryGame />
          {t("retry")}
        </button>
      </div>
    </div>
  );
};

export default Modal;