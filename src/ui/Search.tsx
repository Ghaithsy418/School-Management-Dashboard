import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiSearch } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

function Search({ size }: { size?: string }) {
  const { t } = useTranslation();
  const [isFocused, setIsFocused] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || "";

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    searchParams.set("search", e.target.value.toLowerCase());
    if (page) searchParams.set("page", "1");
    setSearchParams(searchParams);
  }

  return (
    <div
      className={`flex ${size ?? "w-[25%]"} items-center gap-2 rounded-md py-2 outline-1 transition-all duration-300 hover:outline-violet-400 ltr:pl-3 rtl:pr-3 ${isFocused ? "outline-gray-500" : "outline-gray-300"}`}
    >
      <label htmlFor="search">
        <HiSearch className="h-5 w-5 text-gray-800/90 dark:text-gray-50" />
      </label>
      <input
        id="search"
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder={t("controls.search")}
        className="w-full outline-0 dark:placeholder:text-gray-200"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}

export default Search;
