import { useTranslation } from "react-i18next";
import Filter from "./Filter";
import { useEffect, useState } from "react";

function SwitchLanguage() {
  const { i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(
    i18n.language.split("-")[0],
  );

  useEffect(
    function () {
      i18n.changeLanguage(selectedOption);
    },
    [selectedOption, i18n],
  );

  return (
    <div className="flex items-center justify-center gap-24">
      <h3 className="text-xl font-semibold">Select Language:</h3>
      <Filter
        options={languages}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        width="w-55"
      />
    </div>
  );
}

const languages = [
  { title: "Arabic", value: "ar" },
  { title: "English", value: "en" },
];

export default SwitchLanguage;
