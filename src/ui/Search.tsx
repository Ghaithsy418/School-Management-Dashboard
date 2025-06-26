import { FocusEvent, FormEvent, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

function Search({ size }: { size?: string }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(
    e: FormEvent<HTMLFormElement> | FocusEvent<HTMLInputElement, Element>,
  ) {
    e.preventDefault();
    setIsFocused(false);
    searchParams.set("search", value.toLowerCase());
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`flex ${size ?? "w-[25%]"} items-center gap-2 rounded-md py-2 pl-3 outline-1 transition-all duration-300 hover:outline-violet-400 ${isFocused ? "outline-gray-500" : "outline-gray-300"}`}
    >
      <label htmlFor="search">
        <HiSearch className="h-5 w-5 text-gray-800/90" />
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        className="w-full outline-0"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => handleSubmit(e)}
      />
    </form>
  );
}

export default Search;
