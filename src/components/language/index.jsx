import React, { useState, useEffect } from "react";
import { useSettingsStore } from "@/store";
import { get, toLower } from "lodash";

import { useTranslation } from "react-i18next";

const Lang = ({}) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(""); // Initialize with an empty string
  const setLang = useSettingsStore((state) => get(state, "setLang", () => {}));

  // const { i18n } = useTranslation();
  useEffect(() => {
    // Update the selectedLanguage state when the languageSelected prop changes
    setSelectedLanguage(selectedLanguage);
    setLang(selectedLanguage);
  }, [selectedLanguage]); // Run this effect whenever the languageSelected prop changes

  useEffect(() => {
    setLang(selectedLanguage);
  }, [selectedLanguage]);

  const languages = ["uz", "en", "ru"]; // Define your list of languages

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-select relative cursor-pointer">
      <select
        id="languageSelect"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Lang;
