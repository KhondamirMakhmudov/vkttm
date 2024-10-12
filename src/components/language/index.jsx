import React, { useState } from "react";
import { Image } from "next/image";
import { useTranslation } from "react-i18next";
import { useSettingsStore } from "@/store";
import { get } from "lodash";
import { useEffect } from "react";

const LanguageSelectButton = () => {
  const [selectedOption, setSelectedOption] = useState("o'zbek");
  const [isOpen, setIsOpen] = useState(false);
  const setLang = useSettingsStore((state) => get(state, "setLang", () => {}));
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    i18n.changeLanguage(option);
  };
  const options = ["o'zbek", "ingliz", "rus"];

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span
          className={` text-sm font-medium ${
            selectedOption ? "text-black" : "text-gray-400"
          }`}
        >
          {selectedOption}
        </span>
        <svg
          className={`h-5 w-5  transition-transform duration-all ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute   w-[80px] bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {options.map((option) => (
            <div
              key={option}
              className="px-[4px] py-[2px] hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelectButton;
