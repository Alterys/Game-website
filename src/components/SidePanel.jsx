import LanguageRuIcon from "./LanguageRuIcon";
import LanguageEngIcon from "./LanguageEngIcon";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import styles from "../style/SidePanel.module.css";
import { useTranslation } from "react-i18next";

const SidePanel = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language == "ru" ? "en" : "ru");
  };
  return (
    <div className={styles.side_panel}>
      <button className={styles.language_button} onClick={toggleLanguage}>
        {i18n.language == "ru" ? <LanguageRuIcon /> : <LanguageEngIcon />}
      </button>
      {!["/", "/menu", "/endQuiz"].includes(location.pathname) ? (
        <button
          className={styles.menu_button}
          onClick={() => {
            navigate("/menu");
          }}
        >
          <MenuIcon />
          {t("menu")}
        </button>
      ) : null}
    </div>
  );
};

export default SidePanel;
