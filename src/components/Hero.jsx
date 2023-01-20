import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="hero" className='-mx-6 w-screen'>
      {/* <div className="container flex flex-col-reverse h-screen justify-center items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row"> */}
        {/* Left Item */}
        {/* <div className="md:w-1/8 bg-gray-200"> */}
          {/* <img src="src/assets/undraw_data_report.svg" alt="Educate on Maximized Efficiency"/> */}
          {/* <h1 className="max-w-md px-4 pb-4 font-bold text-center md:text-9xl md:text-right">
            7
          </h1>
        </div> */}
        {/* Right Items */}
        {/* <div className="flex flex-col pt-5 pb-7 mb-32 bg-gray-200 space-y-4 md:w-1/4">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Million users
          </h1>
          <p className="mx-w-sm text-2xl text-center md:text-left">
            grow their business with AIM
          </p>
        </div>
      </div> */}
      <img className="border flex w-screen" src={"src/assets/hero.png"} alt="Hero Image" />
    </section>
  )
}

export default Hero
