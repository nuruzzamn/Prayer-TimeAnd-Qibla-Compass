import React from "react";

const Fragment = () => {
  return (
    <div>
      <section className="max-w-screen-sm font-palanquin font-semibold pb-2">
        <button className="hover:bg-black text-white bg-blue-900 border-blue-900 w-36 sm:w-[210px] p-2">
          Prayer Time
        </button>
        <button
          className="hover:bg-black  
        bg-coral-red text-white border-coral-red w-36 sm:w-[210px] p-2"
        >
          Compass
        </button>
      </section>
    </div>
  );
};

export default Fragment;
