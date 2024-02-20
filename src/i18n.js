import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import i18n from "i18next";

const lng = localStorage.getItem("lang");
// const language = persistedLanguage
//   ? JSON.parse(persistedLanguage)?.language
//   : null;
// const lng = language ? language.slice(1, -1) : "en";

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: lng || "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
