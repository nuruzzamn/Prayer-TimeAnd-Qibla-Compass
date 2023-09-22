import React from 'react'
import fajor from "../assets/fojor.png"
import johor from "../assets/johor.png"
import asor from "../assets/asor.png"
import esha from "../assets/esha.png"
import magrib from "../assets/magrib.png"

const NextDayShowResult = ({Asr, Dhuhr, Fajr, Isha, Maghrib}) => {
  return (
    <div className='flex flex-1 font-bold text-black w-full bg-slate-600'>
     
     <section className='bg-transparent flex flex-1 justify-center items-center flex-col'>
      <img src={fajor} alt="" className='w-10 h-10 p-2 rounded-md'/>
      <p className='text-black text-center bg-transparent'> Fajor </p>
      <p className='text-center text-black bg-transparent'> 4.13 AM</p>
     </section>

     <section className='bg-transparent flex flex-1 justify-center items-center flex-col'>
      <img src={fajor} alt="" className='w-10 h-10 p-2 rounded-md'/>
      <p className='text-black text-center bg-transparent'> Dhor </p>
      <p className='text-center text-black bg-transparent'> 12.13 PM</p>
     </section>

     <section className='bg-transparent flex flex-1 justify-center items-center flex-col'>
      <img src={fajor} alt="" className='w-10 h-10 p-2 rounded-md'/>
      <p className='text-black text-center bg-transparent'> Fajor </p>
      <p className='text-center text-black bg-transparent'> 4.13 AM</p>
     </section>

     <section className='bg-transparent flex flex-1 justify-center items-center flex-col'>
      <img src={fajor} alt="" className='w-10 h-10 p-2 rounded-md'/>
      <p className='text-black text-center bg-transparent'> Fajor </p>
      <p className='text-center text-black bg-transparent'> 4.13 AM</p>
     </section>

     <section className='bg-transparent flex flex-1 justify-center items-center flex-col'>
      <img src={fajor} alt="" className='w-10 h-10 p-2 rounded-md'/>
      <p className='text-black text-center bg-transparent'> Fajor </p>
      <p className='text-center text-black bg-transparent'> 4.13 AM</p>
     </section>

      {/* <section className="flex flex-1 gap-5 pt-4 px-2 bg-transparent justify-evenly items-center">
        <img src={fajor} alt="" className='small-icon-size'/>
        <p className='w-16 text-white text-center p-1'> Fajor </p>
        <p className='w-[70px] h-8 text-center text-white p-1'> {(Fajr==="NaN:undefined AM"? "3.13 AM" : Fajr)}</p>
      </section>

      <section className="flex flex-1 gap-5 pt-1 px-2 bg-transparent justify-evenly items-center">
       <img src={johor} alt="" className='small-icon-size'/>
        <p className='w-16 text-white text-center p-1'> Dhuhr </p>
        <p className='w-[70px] h-8 text-center text-white p-1'>{(Dhuhr==="NaN:undefined AM"? "12.35 PM" : Dhuhr)}</p>
      </section> */}

      {/* <section className="flex flex-1 gap-5 pt-1 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 text-white bg-blue-900 border-blue-900 text-center p-1'> Asor </p>
        <img src={asor} alt="" className='small-icon-size'/>
        <p className='w-[70px] h-8 text-center text-white bg-blue-900 border-blue-900 p-1'>{(Asr==="NaN:undefined AM"? "4.00 PM" : Asr)}</p>
      </section>

      <section className="flex flex-1 gap-5 pt-1 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 text-white bg-blue-900 border-blue-900 text-center p-1'> Margrib </p>
        <img src={magrib} alt="" className='small-icon-size'/>
        <p className='w-[70px] h-8 text-center text-white bg-blue-900 border-blue-900 p-1'>{(Maghrib==="NaN:undefined AM"? "6.15 PM" : Maghrib)}</p>
      </section>

      <section className="flex flex-1 gap-5 pt-1 pb-4 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 text-white bg-blue-900 border-blue-900 text-center p-1'> Esha </p>
        <img src={esha} alt="" className='small-icon-size'/>
        <p className='w-[70px] h-8 text-center text-white bg-blue-900 border-blue-900 p-1'>{(Isha==="NaN:undefined AM"? "7.30 PM" : Isha)}</p>
      </section> */}
    </div>
  )
}

export default NextDayShowResult