import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useDirection = function () {
  const { i18n } = useTranslation();

  useEffect(
    function () {
      const dir = i18n.language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = i18n.language;
    },
    [i18n.language],
  );
};
