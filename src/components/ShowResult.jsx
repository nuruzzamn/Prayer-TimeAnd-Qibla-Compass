import React from 'react'
import fajor from "../assets/fojor.png"
import johor from "../assets/johor.png"
import asor from "../assets/asor.png"
import esha from "../assets/esha.png"
import magrib from "../assets/magrib.png"


const ShowResult = () => {
  return (
    <div className='bg-transparent font-bold text-black'>
      <section className="flex flex-1 gap-2 p-2 bg-transparent justify-center items-center">
        <p> Fajor </p>
        <img src={fajor} alt="" className='w-6 h-6'/>
        <p>5.23 am</p>
      </section>

      <section className="flex flex-1 gap-2 p-2 bg-transparent justify-center items-center">
        <p> Fajor </p>
        <img src={johor} alt="" className='w-6 h-6'/>
        <p>5.23 am</p>
      </section>
    </div>
  )
}

export default ShowResult