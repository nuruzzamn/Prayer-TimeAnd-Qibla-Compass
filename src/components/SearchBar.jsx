import React from "react";
import location from "../assets/location.svg"
import Search from "./Search";
import ShowResult from "./ShowResult"

const SearchBar = () => {
  return (
    <div className="bg-transparent flex flex-col">
      <section className="flex flex-col flex-1 bg-transparent justify-center items-center">
          <img src={location} alt="" className="bg-transparent"/>
          <p className="bg-transparent ml-2">Dhaka, bangladesh</p>
          <p className="bg-transparent">2023-09-23</p>
          <p className="bg-transparent">Temperature : 14</p>
      </section>

      <section className="flex flex-1 bg-transparent justify-center items-center">
          <Search />
      </section>

      <section className="flex flex-1 w-[250px] justify-center items-center">
          <ShowResult />
      </section>
    </div>
  );
};

export default SearchBar;
