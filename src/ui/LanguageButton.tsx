import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function LanguageButton() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language.split("-")[0],
  );

  useEffect(
    function () {
      i18n.changeLanguage(selectedLanguage);
    },
    [selectedLanguage, i18n],
  );

  return (
    <button
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gray-200/60 transition-all duration-300 hover:scale-110 hover:bg-gray-200 active:scale-95 dark:border dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
      onClick={() =>
        setSelectedLanguage(selectedLanguage === "ar" ? "en" : "ar")
      }
    >
      {selectedLanguage === "ar" ? (
        <motion.span>ع</motion.span>
      ) : (
        <motion.span>En</motion.span>
      )}
    </button>
  );
}

export default LanguageButton;
