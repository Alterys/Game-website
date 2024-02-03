import React from "react";
import styles from "./Modal.module.css";
import MenuIcon from '../components/MenuIcon';
import RetryGame from "../components/RetryGame";
import { useNavigate } from 'react-router-dom';
import {useTranslation} from "react-i18next";


const Modal = ({ onRestart }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>{t("defeat")}</p>
        <button onClick={() => { navigate("/menu") }}><MenuIcon />{t("return")}</button>
        <button onClick={onRestart}><RetryGame />{t("retry")}</button>
      </div>
    </div>
  );
};

export default Modal;
