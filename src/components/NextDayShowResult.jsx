import React from "react";
import fajor from "../assets/fojor.png";
import johor from "../assets/johor.png";
import asor from "../assets/asor.png";
import esha from "../assets/esha.png";
import magrib from "../assets/magrib.png";

const NextDayShowResult = ({ tomorrowsPrayerTime }) => {
  const { tAsr, tDhuhr, tFajr, tIsha, tMaghrib } = tomorrowsPrayerTime;

  // console.log("tomorrow", tomorrowsPrayerTime.tMaghrib);
  return (
    <div className="flex flex-1 font-bold text-white w-full gap-3 bg-blue-900 pb-10 outline-none border-none">
      <section className="bg-transparent flex flex-1 justify-center items-center flex-col ">
        <img src={fajor} alt="" className="w-14 h-14 p-2 rounded-md" />
        <p className="text-center bg-transparent mt-3 font-bold text-lg">
          {" "}
          Fajor{" "}
        </p>
        <p className="text-center bg-transparent text-sm">
          {" "}
          {tFajr === "NaN:undefined AM" ? "3.13 AM" : tFajr}
        </p>
      </section>

      <section className="bg-transparent flex flex-1 justify-center items-center flex-col">
        <img src={johor} alt="" className="w-14 h-14 p-2 rounded-md" />
        <p className="text-center bg-transparent mt-3 font-bold text-lg">
          {" "}
          Dhuhr{" "}
        </p>
        <p className="text-center bg-transparent text-sm">
          {" "}
          {tDhuhr === "NaN:undefined AM" ? "12.35 PM" : tDhuhr}
        </p>
      </section>

      <section className="bg-transparent flex flex-1 justify-center items-center flex-col">
        <img src={asor} alt="" className="w-14 h-14 p-2 rounded-md" />
        <p className="text-center bg-transparent mt-3 font-bold text-lg">
          {" "}
          Asor{" "}
        </p>
        <p className="text-center bg-transparent text-sm">
          {" "}
          {tAsr === "NaN:undefined AM" ? "4.00 PM" : tAsr}
        </p>
      </section>

      <section className="bg-transparent flex flex-1 justify-center items-center flex-col">
        <img src={magrib} alt="" className="w-14 h-14 p-2 rounded-md" />
        <p className="text-center bg-transparent mt-3 font-bold text-lg">
          {" "}
          Margrib{" "}
        </p>
        <p className="text-center bg-transparent text-sm">
          {" "}
          {tMaghrib === "NaN:undefined AM" ? "6.15 PM" : tMaghrib}
        </p>
      </section>

      <section className="bg-transparent flex flex-1 justify-center items-center flex-col">
        <img src={esha} alt="" className="w-14 h-14 p-2 rounded-md" />
        <p className="text-center bg-transparent mt-3 font-bold text-lg">
          {" "}
          Esha{" "}
        </p>
        <p className="text-center bg-transparent text-sm">
          {" "}
          {tIsha === "NaN:undefined AM" ? "7.30 PM" : tIsha}
        </p>
      </section>
    </div>
  );
};

export default NextDayShowResult;
