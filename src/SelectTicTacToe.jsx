import useStore from "./state.jsx";
import { useNavigate } from "react-router-dom";
import GameForTwoIcon from "./components/GameForTwoIcon.jsx";
import GameWithBotIcon from "./components/GameWithBotIcon.jsx";
import SidePanel from "./components/SidePanel.jsx";
import styles from "./style/SelectTicTacToe.module.css";
import { useTranslation } from "react-i18next";

export default function Menu() {
  const { t } = useTranslation();
  const name = useStore((state) => state.name);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <SidePanel />
      <p>
        {t("mode")}
      </p>
      <div className={styles.menu}>
        <button
          className="button-menu"
          onClick={() => {
            navigate("/select");
          }}
        >
          <GameWithBotIcon />
          {t("gameWithBot")}
        </button>
        <button
          className="button-menu"
          onClick={() => {
            navigate("/solo");
          }}
        >
          <GameForTwoIcon />
          {t("gameForTwo")}
        </button>
      </div>
    </div>
  );
}
