import { useEffect, useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  Languages,
} from "lucide-react";

import { useLanguage } from "../../Context/LanguageContext.jsx";
import "./LanguageSwitcher.css";

const languageOptions = [
  {
    code: "en",
    shortName: "EN",
    label: "English",
  },
  {
    code: "hi",
    shortName: "HI",
    label: "हिंदी",
  },
  {
    code: "gu",
    shortName: "GU",
    label: "ગુજરાતી",
  },
  {
    code: "ur",
    shortName: "UR",
    label: "اردو",
  },
];

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);

  const switcherRef = useRef(null);

  const currentLanguage =
    languageOptions.find(
      (languageItem) => languageItem.code === language
    ) || languageOptions[0];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscapeKey
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscapeKey
      );
    };
  }, []);

  const handleLanguageChange = (languageCode) => {
    setLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div
      className="language-switcher"
      ref={switcherRef}
    >
      <button
        type="button"
        className="language-switcher-button"
        onClick={() =>
          setIsOpen((currentValue) => !currentValue)
        }
        aria-expanded={isOpen}
        aria-label={t("language.label")}
      >
        <Languages size={18} />

        <span>{currentLanguage.shortName}</span>

        <ChevronDown
          size={16}
          className={
            isOpen ? "language-chevron-open" : ""
          }
        />
      </button>

      <div
        className={`language-menu ${
          isOpen ? "language-menu-open" : ""
        }`}
      >
        {languageOptions.map((languageItem) => {
          const isActive =
            language === languageItem.code;

          return (
            <button
              type="button"
              key={languageItem.code}
              className={`language-option ${
                isActive
                  ? "language-option-active"
                  : ""
              }`}
              onClick={() =>
                handleLanguageChange(
                  languageItem.code
                )
              }
            >
              <span className="language-short-name">
                {languageItem.shortName}
              </span>

              <span>{languageItem.label}</span>

              {isActive && (
                <Check
                  size={16}
                  className="language-check"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default LanguageSwitcher;