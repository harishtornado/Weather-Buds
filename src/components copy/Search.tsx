import React, { FC, FormEvent, useRef } from "react";

interface SearchProps {
  city: string;
  updateCity: (cityName: string) => void;
}

const Search: FC<SearchProps> = ({ city, updateCity }) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current?.value.length === 0) return;
    updateCity(searchRef.current?.value || "");
    searchRef.current!.value = "";
  };
  return (
    <div className="bg-slate-400 row-span-1 rounded-lg flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="p-1 bg-white rounded-md overflow-hidden flex flex-row shadow-lg justify-center items-center"
      >
        <input
          className="px-4 py-2 focus:outline-0"
          type="text"
          ref={searchRef}
          placeholder="Enter City"
        />
        <button
          className="flex justify-center items-center rounded-md p-2 bg-black"
          type="submit"
        >
          <img
            src={require("../assets/search.png")}
            width={25}
            height={25}
            alt="search"
          />
        </button>
      </form>
    </div>
  );
};

export default Search;
