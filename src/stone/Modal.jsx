import React from 'react';
import styles from './Modal.module.css';
import MenuIcon from '../components/MenuIcon';
import RetryGame from '../components/RetryGame';
import { useNavigate } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const Modal = ({ userChoice, botChoice, result, onClose, onRestart }) => {
    const {t} = useTranslation()
    const navigate = useNavigate()
  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
      <p className={styles.result}>{result}</p>
        <div className={styles.container}>
        <p>Ваш выбор: {userChoice}</p>
        <p>Выбор бота: {botChoice}</p>
        </div>
        <div className={styles.container_buttons}>
        <button onClick={onRestart}><RetryGame />{t("retry")}</button>
        <button onClick={() => { navigate("/menu") }}><MenuIcon />{t("return")}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;