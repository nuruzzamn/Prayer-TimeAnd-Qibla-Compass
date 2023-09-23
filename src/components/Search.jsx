import React from "react";

const Search = ({ onChangeHandle, searchData, initialData, onclick }) => {

  return (
    <div className="bg-transparent rounded-full focus:outline-none">
      <section className="flex flex-row justify-between bg-none border border-slate-gray p-1 rounded-full">
        <input
          type="text"
          name="text"
          placeholder="Enter a location"
          onChange={onChangeHandle}
          value={searchData || initialData}
          className="w-40 text-center outline-none p-0 flex-1 rounded-full text-slate-gray text-sm font-normal px-2"
          required
        />

        <button
          className="hover:bg-black  
        bg-coral-red text-white font-semibold border-coral-red
          flex justify-center items-center gap-2 px-3 py-2 border font-montserrat text-sm leading-none rounded-full"
          onClick={onclick}
        >
          <p className="bg-transparent cursor-pointer">Search</p>
        </button>
      </section>
    </div>
  );
};

export default Search;
