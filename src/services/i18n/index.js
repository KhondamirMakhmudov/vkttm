import React from "react";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uzTranslations from "@/translations/uz.json";
import ruTranslations from "@/translations/ru.json";
import enTranslations from "@/translations/en.json";
import { config } from "@/config";
import { URLS } from "@/constants/url";
import storage from "../storage";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      uz: {
        translation: uzTranslations,
      },
      ru: {
        translation: ruTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    lng: "uz",
    fallbackLng: "uz",
    keepPreviousData: false,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
