import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    ns: [
      "dashboard",
      "auth",
      "students",
      "teachers",
      "supervisors",
      "newsAndAdds",
      "classes",
    ],
    defaultNS: "dashboard",
    supportedLngs: ["ar", "en"],
    nonExplicitSupportedLngs: true,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });
