import React, { useState } from 'react';

const LanguageSelectButton = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("o'zbek");
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left text-lg font-bold">
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex  font-bold justify-between items-center w-full rounded-md  px-4 py-2 bg-transparent  text-[#2C3E50]  focus:outline-none "
                >
                    {selectedLanguage}
                    <svg
                        className={`ml-2 -mr-1 h-5 w-5 transform transition-transform ${
                            isOpen ? 'rotate-180' : 'rotate-0'
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
                </button>
            </div>
            {isOpen && (
                <select
                    value={selectedLanguage}
                    onChange={handleChange}
                    className="absolute w-full mt-2 text-lg font-bold rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    size={3}
                >
                    <option value="rus">rus</option>
                    <option value="ingliz">ingliz</option>
                    <option value="o&apos;zbek">o&apos;zbek</option>
                </select>
            )}
        </div>
    );
};

export default LanguageSelectButton;