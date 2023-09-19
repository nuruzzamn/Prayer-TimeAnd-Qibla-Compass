import React, { useState } from "react";
import location from "../assets/location.svg";
import Search from "./Search";
import ShowResult from "./ShowResult";

const SearchBar = () => {

  const [searchData, setSearchData] = useState("")
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  // const api ="https://muslimsalat.com/"+searchData+".json?key=80bf63d2909ced2719313f42ac3d44d3"
  const api ="https://muslimsalat.com/dhaka.json?key=80bf63d2909ced2719313f42ac3d44d3"


  const onFetchDataChanged = (data) => {
    setData(data);
  };

  const onErrorMessageChanged = (data) => {
    setError(data);
  };

  console.log("error",error);

  data !== undefined
    ? console.log("Api", data)
    : console.log("undefined data");


  const apiDataHandle = () => {
    if (api) {
      fetch(api)
        .then((res) => {
          if (!res.ok) {
            throw "Finding error!! Enter a valid location";
          } else {
            return res.json();
          }
        })
        .then((data) => {
          console.log("data", data);
          onFetchDataChanged(data);
        })
        .catch((error) => {
          onErrorMessageChanged(error);
          // notify();
        });
    } else {
      // notify();
      console.log("enter a location name");
    }
  };

  const onChangeHandle =(e)=>{
    setSearchData(e.target.value)
  }

  const onclick =()=>{
    console.log("click", api)
    setSearchData("")
    apiDataHandle();
  }

  return (
    <div className="bg-transparent flex flex-col font-palanquin font-bold">
      <section className="flex flex-col flex-1 bg-transparent justify-center items-center text-lg text-white font-bold">
        <section className="flex flex-1 bg-transparent">
          <img src={location} alt="" className="bg-transparent" />
          <p className="bg-transparent ml-2">Dhaka, bangladesh</p>
        </section>

        <p className="bg-transparent py-1">2023-09-23</p>
        <p className="bg-transparent pb-1">Temperature : 14</p>
      </section>

      <section className="flex flex-1 py-2 bg-transparent justify-center items-center">
        <Search searchData={searchData} onChangeHandle={onChangeHandle} onclick={onclick}/>
      </section>

      <section className="flex flex-1 w-[260px] bg-red-100">
        <ShowResult />
      </section>
    </div>
  );
};

export default SearchBar;
