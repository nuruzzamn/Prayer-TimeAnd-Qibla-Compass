import React, { useState, useEffect } from "react";
import location from "../assets/location.svg";
import Search from "./Search";
import ShowResult from "./ShowResult";

const SearchBar = () => {
  const [searchData, setSearchData] = useState("Dhaka");
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const api = `https://dailyprayer.abdulrcs.repl.co/api/${searchData}`;

  const onChangeHandle = (e) => {
    setSearchData(e.target.value);
  };

  const onClick = () => {
    setSearchData("");
    apiDataHandle();
  };

  useEffect(() => {
    if (searchData) {
      // Debounce the input to wait for a short pause (e.g., 500ms) before making the request
      const timer = setTimeout(() => {
        apiDataHandle();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [searchData]);

  const apiDataHandle = () => {
    if (searchData) {
      fetch(api)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Finding error!! Enter a valid location');
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          setError(error.message); // Set error message
          setData({}); // Clear previous data
        });
    } else {
      setError("Enter a location name");
    }
  };

  // Function to convert 24-hour format to AM/PM format
  const convertTo12HourFormat = (time24) => {
    const [hours, minutes] = time24.split(":");
    const parsedHours = parseInt(hours, 10);
    const ampm = parsedHours >= 12 ? "PM" : "AM";
    const hours12 = parsedHours > 12 ? parsedHours - 12 : parsedHours === 0 ? 12 : parsedHours;
    return `${hours12}:${minutes} ${ampm}`;
  };

  const Asr = convertTo12HourFormat(data?.today?.Asr || "");
  const Dhuhr = convertTo12HourFormat(data?.today?.Dhuhr || "");
  const Fajr = convertTo12HourFormat(data?.today?.Fajr || "");
  const Isha = convertTo12HourFormat(data?.today?.['Isha\'a'] || "");
  const Maghrib = convertTo12HourFormat(data?.today?.Maghrib || "");

  // console.log(Asr, Dhuhr)

  return (
    <div className="bg-transparent flex flex-col font-palanquin font-bold">
      <section className="flex flex-col flex-1 bg-transparent justify-center items-center text-lg text-white font-bold">
        <br />
        <section className="flex flex-1 bg-transparent">
          <img src={location} alt="" className="bg-transparent" />
          <p className="bg-transparent ml-2">{data.city ?? "Dhaka"}</p>
        </section>
        <p className="bg-transparent py-1">{data.date ?? "2023-09-23"}</p>
      </section>

      <section className="flex flex-1 py-2 bg-transparent justify-center items-center">
        <Search
          searchData={searchData}
          onChangeHandle={onChangeHandle}
          onClick={onClick}
        />
      </section>

      <section className="flex flex-1 w-[260px] bg-red-100">
        <ShowResult
          Asr={Asr}
          Dhuhr={Dhuhr}
          Fajr={Fajr}
          Isha={Isha}
          Maghrib={Maghrib}
        />
      </section>
      
      {error && (
        <div className="text-red-500 font-bold text-center mt-2">
          {error}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
