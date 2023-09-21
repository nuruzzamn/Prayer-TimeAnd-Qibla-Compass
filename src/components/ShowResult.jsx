import React from 'react'
import fajor from "../assets/fojor.png"
import johor from "../assets/johor.png"
import asor from "../assets/asor.png"
import esha from "../assets/esha.png"
import magrib from "../assets/magrib.png"


const ShowResult = ({Asr, Dhuhr, Fajr, Isha, Maghrib}) => {

  console.log("Show result Dhuhr",(Dhuhr==="NaN:undefined AM"? "" : Dhuhr))
  return (
    <div className='bg-transparent font-bold text-black w-full'>
      <section className="flex flex-1 gap-5 pt-4 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 text-white bg-blue-900 border-blue-900 text-center p-1'> Fajor </p>
        <img src={fajor} alt="" className='small-icon-size'/>
        <p className='w-16 h-8 text-white bg-blue-900 border-blue-900 p-1'> {(Fajr==="NaN:undefined AM"? "3.13 pm" : Fajr)}</p>
      </section>

      <section className="flex flex-1 gap-5 pt-1 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 text-white bg-blue-900 border-blue-900 text-center p-1'> Dhuhr </p>
        <img src={johor} alt="" className='small-icon-size'/>
        <p className='w-20 h-8 text-white bg-blue-900 border-blue-900 p-1'>{(Dhuhr==="NaN:undefined AM"? "5.23 am" : Dhuhr)}</p>
      </section>

      <section className="flex flex-1 gap-5 pt-1 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 text-white bg-blue-900 border-blue-900 text-center p-1'> Asor </p>
        <img src={asor} alt="" className='small-icon-size'/>
        <p className='w-16 h-8 text-white bg-blue-900 border-blue-900 p-1'>{(Asr==="NaN:undefined AM"? "5.23 am" : Asr)}</p>
      </section>

      <section className="flex flex-1 gap-5 pt-1 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 text-white bg-blue-900 border-blue-900 text-center p-1'> Margrib </p>
        <img src={magrib} alt="" className='small-icon-size'/>
        <p className='w-16 text-white bg-blue-900 border-blue-900 p-1'>5.23 am</p>
      </section>

      <section className="flex flex-1 gap-5 pt-1 pb-4 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 text-white bg-blue-900 border-blue-900 text-center p-1'> Esha </p>
        <img src={esha} alt="" className='small-icon-size'/>
        <p className='w-16 text-white bg-blue-900 border-blue-900 p-1'>5.23 am</p>
      </section>
    </div>
  )
}

export default ShowResult