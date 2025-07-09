import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
      <Select
        onValueChange={(e) => setSelectedOption(e)}
        value={selectedOption}
      >
        <SelectTrigger className="!h-12 w-[24rem] border-gray-600/70 text-base transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">
          <SelectValue placeholder="Click to select a language..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Languages</SelectLabel>
            {languages.map((language) => (
              <SelectItem key={language.value} value={language.value}>
                {language.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

const languages = [
  { title: "Arabic", value: "ar" },
  { title: "English", value: "en" },
];

export default SwitchLanguage;
