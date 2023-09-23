// src/components/QiblaCompass.js
// import CompasImg from "../assets/CompasImg.png"
import bgMocca from "../assets/mocca.jpg";
import React, { useEffect, useState } from "react";

function Test() {
  const [compass, setCompass] = useState(0);
  const [pointDegree, setPointDegree] = useState(null);

  const init = () => {
    navigator.geolocation.getCurrentPosition(locationHandler);
    window.addEventListener("deviceorientation", handler, true);
  };

  const handler = (e) => {
    const alpha = e.alpha;
    setCompass(alpha);
    const compassCircle = document.querySelector(".compass-circle");
    const myPoint = document.querySelector(".my-point");

    compassCircle.style.transform = `translate(-50%, -50%) rotate(${-alpha}deg)`;

    // ±15 degree
    if (
      (pointDegree < Math.abs(alpha) &&
        pointDegree + 15 > Math.abs(alpha)) ||
      pointDegree > Math.abs(alpha + 15) ||
      pointDegree < Math.abs(alpha)
    ) {
      myPoint.style.opacity = 0;
    } else if (pointDegree) {
      myPoint.style.opacity = 1;
    }
  };

  const locationHandler = (position) => {
    const { latitude, longitude } = position.coords;
    const degree = calcDegreeToPoint(latitude, longitude);

    if (degree < 0) {
      setPointDegree(degree + 360);
    } else {
      setPointDegree(degree);
    }
  };

  const calcDegreeToPoint = (latitude, longitude) => {
    // Qibla geolocation
    const point = {
      lat: 21.422487,
      lng: 39.826206,
    };

    const phiK = (point.lat * Math.PI) / 180.0;
    const lambdaK = (point.lng * Math.PI) / 180.0;
    const phi = (latitude * Math.PI) / 180.0;
    const lambda = (longitude * Math.PI) / 180.0;
    const psi =
      (180.0 / Math.PI) *
      Math.atan2(
        Math.sin(lambdaK - lambda),
        Math.cos(phi) * Math.tan(phiK) -
          Math.sin(phi) * Math.cos(lambdaK - lambda)
      );
    return Math.round(psi);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-40 h-40 relative">
        <img
          src={bgMocca} // Add your mosque image here
          alt="Mosque"
          className="w-40 h-40 absolute top-0 left-0 transform -rotate-90"
        />
        <div
          className="w-2 h-16 bg-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full rotate-[180deg]"
          style={{
            transform: `rotate(${compass}deg)`,
          }}
        ></div>
        <div
          className="w-6 h-6 bg-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            transform: `rotate(${compass}deg)`,
          }}
        ></div>
      </div>
      <div className="mt-4 text-xl font-bold">
        Qibla Direction: {pointDegree !== null ? pointDegree.toFixed(2) : ""}
        &deg;
      </div>
    </div>
  );
}

export default Test;
