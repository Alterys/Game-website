import styles from'../style/EndGame.module.css';
import MenuIcon from './MenuIcon';
import RetryGame from './RetryGame';
import { useNavigate } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const EndGame = ({ active, setActive, handleResetBoard, result }) => {
    const {t} = useTranslation()

    const navigate = useNavigate()
    let resultGame;
    const handleClickReset = () => {
        handleResetBoard()
        setActive(false)
    }

    switch (result) {
        case 'win':
            resultGame =  t("win");
            break;
        case 'defeat':
            resultGame = t("defeat");
            break;
        case 'draw':
            resultGame = t("draw");
            break;
        case 'crosses':
            resultGame = t("win-crosses")
            break;
        case 'zeroes':
            resultGame = t("win-zeroes")
            break;
    }
    return (
        <div className={`${styles.modal} ${active ? styles.active : null}`}>
            <div className={styles.window_game_end}>
                <p>{resultGame}</p>
                <button onClick={handleClickReset}><RetryGame />{t("retry")}</button>
                <button onClick={() => { navigate("/menu") }}><MenuIcon />{t("return")}</button>
            </div>
        </div>
    );
}

export default EndGame;