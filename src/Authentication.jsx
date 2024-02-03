import { useState } from "react";
import styles from "./style/Authentication.module.css";
import { useNavigate } from "react-router-dom";
import useStore from "./state.jsx";
import ButtonStartIcon from "./components/ButtonStartIcon.jsx";
import SidePanel from "./components/SidePanel.jsx";
import { useTranslation } from "react-i18next";

function validateName(name) {
  return name.length <= 16 && name.length >= 3;
}

export default function Authentication() {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const navigate = useNavigate();
  const setName = useStore((state) => state.setName);
  const isValueValid = validateName(value);

  return (
    <div>
      <SidePanel />
      <div className={styles.container}>
        <div className={styles.container_name}>
          <p>{t("name")}</p>
          <input
            placeholder=""
            onChange={(event) => setValue(event.target.value.trim())}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            setIsTouched(true);
            if (isValueValid) {
              setName(value);
              navigate("/menu");
            }
          }}
        >
          <ButtonStartIcon />
        </button>
      </div>
      {isTouched && !isValueValid && (
        <div className={styles.notification}>
          <p>{t("notification")}</p>
        </div>
      )}
    </div>
  );
}
