import { useState } from "react";
import { HiSearch } from "react-icons/hi";

function Search() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={`flex w-[25%] items-center gap-2 rounded-xl py-2 pl-3 outline-1 transition-all duration-300 hover:outline-violet-400 ${isFocused ? "outline-gray-500" : "outline-gray-300"}`}
    >
      <label htmlFor="search">
        <HiSearch className="h-5 w-5 text-gray-800/90" />
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        className="w-full outline-0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}

export default Search;
