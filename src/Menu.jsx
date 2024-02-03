import useStore from "./state.jsx";
import { useNavigate } from "react-router-dom";
import SidePanel from "./components/SidePanel.jsx";
import TicTacToeIcon from "./components/TicToeTacIcon.jsx";
import SnakeIcon from "./components/SnakeIcon.jsx"
import QuizIcon from "./components/QuizIcon.jsx"
import StoneGameIcon from "./components/StoneGameIcon.jsx"
import styles from "./style/Menu.module.css";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { t } = useTranslation();
  const name = useStore((state) => state.name);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <SidePanel />
      <p>
        {t("welcome")}, {name}
      </p>
      <div className={styles.container_buttons}>
      <button
          onClick={() => {
            navigate("/selectTicTacToe");
          }}
        >
          <TicTacToeIcon />{t("tictactoe")}
        </button>
        <button
          onClick={() => {
            navigate("/snake");
          }}
        >
          <SnakeIcon />{t("snake")}
        </button>
        <button
        onClick={() => {
          navigate("/quiz");
        }}
        >
          <QuizIcon />{t("quiz")}
        </button>
        <button
        onClick={() => {
          navigate("/stone");
        }}
        >
          <StoneGameIcon />{t("stone")}
        </button>
        </div>
    </div>
  );
}
