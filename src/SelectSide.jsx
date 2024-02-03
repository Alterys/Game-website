import { useNavigate } from "react-router-dom";
import styles from './style/SelectSide.module.css';
import SidePanel from "./components/SidePanel";
import { useTranslation } from "react-i18next";
import { useState } from "react";



export default function SelectSide() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [rangeTime, setRangeTime] = useState(1);
    const [withTimer, setWithTimer] = useState(false);
    const startWithTimer = (xIsNext, rangeTime) => navigate("/offline", { state: { xIsNext, rangeTime } });
    const startWithoutTimer = (xIsNext) => navigate("/offline", { state: { xIsNext } });
    const options = [{
        value: false,
        name: t("time-disabled")
    },
    {
        value: true,
        name: t("time-by-minute")
    }];


    return (
        <div className={styles.container}>
            <SidePanel />
            <p>{t("selectSide")}</p>

            <div className={styles.sides_row}>
                <button onClick={() => withTimer ? startWithTimer(true, rangeTime) : startWithoutTimer(true)}>{t("crosses")}</button>
                <button onClick={() => withTimer ? startWithTimer(false, rangeTime) : startWithoutTimer(false)}>{t("zeroes")}</button>
            </div>
            <div className={styles.time}>
                <p>{t("time-control")}</p>
                <select onChange={(e) => setWithTimer(e.target.value === 'true' ? true : false)}>
                    {options.map((optionValue) =>
                        <option key={optionValue.name} value={optionValue.value}>{optionValue.name}</option>
                    )}
                </select>
                {withTimer && <p>{rangeTime} {t("minute")}</p>}
                {withTimer && <input type="range" min="1" max="6" value={rangeTime} onChange={(e) => {
                    setRangeTime(e.target.value)
                }}></input>}
            </div>
        </div>
    );
}