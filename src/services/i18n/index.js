import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import uzTranslations from "@/translations/uz.json";
import ruTranslations from "@/translations/ru.json";
import enTranslations from "@/translations/en.json";
import { config } from "@/config";
import { URLS } from "@/constants/url";
import storage from "../storage";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: storage.get("i18nextLng") || config.DEFAULT_APP_LANG,
    fallbackLng: storage.get("i18nextLng") || config.DEFAULT_APP_LANG,
    backend: {
      loadPath: `${config.API_URL}${URLS.news}?lang={{lng}}`,
      addPath: `${config.API_URL}${URLS.news}`,
    },
    debug: false,
    keySeparator: false,
    saveMissing: true,
    react: {
      useSuspense: false,
      wait: true,
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
  });

export default i18next;
