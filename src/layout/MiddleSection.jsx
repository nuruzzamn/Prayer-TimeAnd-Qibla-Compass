import React from 'react'
import bgMocca from "../assets/mocca.jpg" 
import SearchBar from "../components/SearchBar"

const MiddleSection = () => {
  return (
    <div className='bg-blue-900 w-full  flex flex-col items-center'>
      {/* <p>container</p> */}
      <img src={bgMocca} alt="" className='sm:w-[450px] max-w-[450px] opacity-100 object-contain'/>
      <section className='bg-transparent mt-[-230px] sm:mt-[-210px]'>
        <SearchBar />
      </section>

    </div>
  )
}

export default MiddleSection