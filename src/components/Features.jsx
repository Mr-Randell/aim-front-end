import React from 'react'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <section id="features">
      <div className="container flex h-screen justify-center items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
        {/* Left Items */}
        <div className="flex flex-col mb-32 justify-center items-center space-y-12 md:w-3/4">
          <h1 className="max-w-md text-4xl text-center md:text-5xl md:text-center">
            <span className="font-bold md:hover:text-blue-800">Advanced Features</span> made simple
          </h1>
          <p className="mx-w-sm text-2xl text-center md:text-center">
            Use cutting-edge automation and advanced routes to manage any warehouse.
          </p>
          <p className="mx-w-sm text-center md:text-center">
            Get the most efficient stocking method and improve all your internal operations. AIMs double-entry inventory has no stock input,
            output or transformation. Instead, all operations are stock moves between locations.
          </p>
        </div>

        {/* Right Item */}
        {/* <div className="md:w-1/4" /> */}
          {/* <img src="src/assets/undraw_data_report.svg" alt="Educate on Maximized Efficiency"/> */}
        </div>
    </section>
  )
}

export default Features
