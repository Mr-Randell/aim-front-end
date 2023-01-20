import React from 'react'
import { Link } from 'react-router-dom'
import dataReport from "../assets/undraw_data_report.svg"

const Performance = () => {
  return (
    <section id="performance">
      <div className="container flex flex-col-reverse h-screen items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
        {/* Right Item */}
        <div className="md:w-3/4">
          <img src={ dataReport } alt="Educate on Maximized Efficiency"/>
        </div>
        {/* Left Items */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:hover:text-blue-800 md:text-5xl md:text-left">
            Improve performance & process time
          </h1>
          <p className="mx-w-sm text-2xl text-center md:text-left">
            Better organize your business with a smart double entry inventory system.
          </p>
          <p className="mx-w-sm text-center md:text-left">
            Get the most efficient stocking method and improve all your internal operations. AIMs double-entry inventory has no stock input,
            output or transformation. Instead, all operations are stock moves between locations.
          </p>
        </div>

        {/* Right Item */}
        {/* <div className="md:w-1/4">
          <img src="src/assets/undraw_data_report.svg" alt="Educate on Maximized Efficiency"/>
        </div> */}
      </div>
    </section>
  )
}

export default Performance
