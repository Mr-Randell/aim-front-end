import React from 'react'
import { Link } from 'react-router-dom'
import { Performance, Features, Hero } from "../components";

const Discover = () => {
  return (
    <section id="hero" className="flex flex-col px-6 pt-[6rem] mx-auto max-w-screen">
      <div className="container flex flex-col-reverse h-screen items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/* Left Items */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl text-center md:text-5xl md:text-left">
            Maximize on <span className="font-bold">Inventory Management</span> Efficiency
          </h1>
          <p className="mx-w-sm text-center md:text-left">
            Modern Online Inventory Management Software. AIM makes it simple for business to maintain focus on the things that actually matter by
            taking care of important Inventory logistics that drive the actual business.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/signup" className="p-3 px-6 pt-2 text-white bg-blue-800 hover:bg-blue-700">
              Sign Up - Its Free
            </Link>
          </div>
        </div>
        {/* Right Item */}
        <div className="-mr-44 md:w-1/2" />
          <img src="src/assets/undraw_reading.svg" alt="Educate on Maximized Efficiency"/>
      </div>
      <Performance />
      <Features />
      <Hero />
      {/* <Inventories /> */}
    </section>
  )
}

export default Discover
