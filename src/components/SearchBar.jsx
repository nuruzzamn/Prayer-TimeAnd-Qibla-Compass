import React, { useState, useEffect } from "react";
import location from "../assets/location.svg";
import Search from "./Search";
import ShowResult from "./ShowResult";
import NextDayShowResult from "./NextDayShowResult";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBar = () => {
  const [initialData, setInitialData] = useState("dhaka");
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const api = `https://dailyprayer.abdulrcs.repl.co/api/${
    searchData || initialData
  }`;

  // if(searchData ===""){
  //   setSearchData("dhaka")
  // }

  const notify = () =>
    toast.error("Enter a valid Location!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: "transparent", // Change the inner side color to a transparent background
        color: "#000", // Change the text color to black
      },
    });

  const onChangeHandle = (e) => {
    setSearchData(e.target.value);
    setInitialData("");
  };

  const onclick = () => {
    setSearchData("");
    setInitialData("");
    apiDataHandle();

    error && notify();
  };

  useEffect(() => {
    if (initialData) {
      const timer = setTimeout(() => {
        apiDataHandle();
        setInitialData("");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const apiDataHandle = () => {
    if (searchData || initialData) {
      fetch(api)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Finding error!! Enter a valid location");
          } else {
            return res.json();
          }
        })
        .then((data) => {

          console.log(data);
          // notify()
          setError(data.Error);
          setData(data);
        })
        .catch((error) => {
          console.log("catch", error);
          setError(error.message);
          setData({});
          notify();
        });
    } else {
      notify();
      setError("Enter a location name");
    }
  };

  // console.log("Find Error",data.error);
  // Function to convert 24-hour format to AM/PM format
  const convertTo12HourFormat = (time24) => {
    const [hours, minutes] = time24.split(":");
    const parsedHours = parseInt(hours, 10);
    const ampm = parsedHours >= 12 ? "PM" : "AM";
    const hours12 =
      parsedHours > 12
        ? parsedHours - 12
        : parsedHours === 0
        ? 12
        : parsedHours;
    return `${hours12}:${minutes} ${ampm}`;
  };

  const Asr = convertTo12HourFormat(data?.today?.Asr || "");
  const Dhuhr = convertTo12HourFormat(data?.today?.Dhuhr || "");
  const Fajr = convertTo12HourFormat(data?.today?.Fajr || "");
  const Isha = convertTo12HourFormat(data?.today?.["Isha'a"] || "");
  const Maghrib = convertTo12HourFormat(data?.today?.Maghrib || "");

  // console.log(Asr, Dhuhr)

  return (
    <div className="bg-transparent flex flex-col font-palanquin font-bold">
      <ToastContainer />
      <section className="flex flex-col flex-1 bg-transparent justify-center items-center text-lg text-white font-bold">
        <br />
        <section className="flex flex-1 bg-transparent">
          <img src={location} alt="" className="bg-transparent" />
          <p className="bg-transparent ml-2">{data.city ?? "Dhaka"}</p>
        </section>
        <p className="bg-transparent py-1">{data.date ?? "Thu,21 Sep 2023"}</p>
      </section>

      <section className="flex flex-1 py-2 bg-transparent justify-center items-center">
        <Search
          initialData={initialData}
          searchData={searchData}
          onChangeHandle={onChangeHandle}
          onclick={onclick}
        />
      </section>

      <section className="flex flex-col flex-1 w-[350px] outline-none border-none">
        <ShowResult
          Asr={Asr}
          Dhuhr={Dhuhr}
          Fajr={Fajr}
          Isha={Isha}
          Maghrib={Maghrib}
        />
        {/* <br className="bg-blue-900 "/> */}
        <span className="w-full bg-blue-900 h-5 outline-none border-none"></span>
        <p className="bg-blue-900 text-center text-white pb-3 text-xl">Tomorrow's prayer time</p>
        <NextDayShowResult />
      </section>

      {/* {error && (
        <div className="text-red-500 font-bold text-center mt-2">
          {error && notify()}
        </div>
      )} */}
    </div>
  );
};

export default SearchBar;
