import i18n from "i18next";
import LangugeDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(LangugeDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: true,
    detection: {
      order: ["cookie", "localStorage"],
      caches: ["cookie", "localStorage"],
    },
  });

export default i18n;
