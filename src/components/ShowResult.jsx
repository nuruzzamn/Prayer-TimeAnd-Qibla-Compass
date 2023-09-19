import React from 'react'
import fajor from "../assets/fojor.png"
import johor from "../assets/johor.png"
import asor from "../assets/asor.png"
import esha from "../assets/esha.png"
import magrib from "../assets/magrib.png"


const ShowResult = () => {
  return (
    <div className='bg-transparent font-bold text-black w-full'>
      <section className="flex flex-1 gap-5 pt-2 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 bg-emerald-600 text-center p-1'> Fajor </p>
        <img src={fajor} alt="" className='small-icon-size'/>
        <p className='w-16 bg-emerald-600 p-1'>5.23 am</p>
      </section>

      <section className="flex flex-1 gap-5 pt-1 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 bg-emerald-600 text-center p-1'> Johor </p>
        <img src={johor} alt="" className='small-icon-size'/>
        <p className='w-16 bg-emerald-600 p-1'>5.23 am</p>
      </section>

      <section className="flex flex-1 gap-5 pt-1 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 bg-emerald-600 text-center p-1'> Asor </p>
        <img src={asor} alt="" className='small-icon-size'/>
        <p className='w-16 bg-emerald-600 p-1'>5.23 am</p>
      </section>

      <section className="flex flex-1 gap-5 pt-1 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 bg-emerald-600 text-center p-1'> Margrib </p>
        <img src={magrib} alt="" className='small-icon-size'/>
        <p className='w-16 bg-emerald-600 p-1'>5.23 am</p>
      </section>

      <section className="flex flex-1 gap-5 pt-1 pb-2 px-2 bg-transparent justify-evenly items-center">
        <p className='w-16 bg-emerald-600 text-center p-1'> Esha </p>
        <img src={esha} alt="" className='small-icon-size'/>
        <p className='w-16 bg-emerald-600 p-1'>5.23 am</p>
      </section>
    </div>
  )
}

export default ShowResult