import React from 'react'
import {Link} from "react-router-dom"
import Header from "../../components/dashboard/Header";

function DashBoard() {
  return (
    <>
      <div className="m-8">
        <div className="text-3xl mb-12 font-bold">
          <Header title="Dashboard" description="Welcome to your dashboard" />
        </div>
        <section id="dashboard" className="">
          <div className="container flex flex-col items-center px-6 mx-auto justify-center">
              {/* Top Items */}
              <div className="container flex flex-col justify-center pt-6 mx-auto mt-10 space-y-12 md:space-y-0 md:space-x-10 md:flex-row">
                  {/* removed md:hover:border-blue-800 and replaced with  md:shadow-2xl */}
                  <Link to="/assets" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:hover:shadow-2xl duration-300 ...">
                      <h5 className="max-w-sm text-2xl font-bold text-center md:hover:text-blue-800 md:text-3xl md:text-left">
                          Assets
                      </h5>
                      {/* <BiDotsVerticalRounded /> */}
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          204
                      </p>
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          Location
                      </p>
                      <button className="mx-w-sm pt-6 text-center md:text-center">
                          View All
                      </button>
                  </Link>
                  <Link to="#" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:hover:shadow-2xl duration-300 ...">
                      <h5 className="max-w-sm text-2xl font-bold text-center md:hover:text-blue-800 md:text-3xl md:text-left">
                          Assigned Assets
                      </h5>
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          159
                      </p>
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          Location
                      </p>
                      <button className="mx-w-sm pt-6 text-center md:text-center">
                          View All
                      </button>
                  </Link>
                  <Link to="#" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:hover:shadow-2xl duration-300 ...">
                      <h5 className="max-w-sm text-2xl font-bold text-center md:hover:text-blue-800 md:text-3xl md:text-left">
                          Unassigned Assets
                      </h5>
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          0
                      </p>
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          Location
                      </p>
                      <button className="mx-w-sm pt-6 text-center bg-white md:text-center">
                          View All
                      </button>
                  </Link>
              </div>

              {/* Bottom Items */}
              <div className="hidden container flex-col justify-center py-6 mx-auto my-10 space-y-12 md:flex md:space-y-0 md:space-x-10 md:flex-row">
                  <Link to="#" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:hover:shadow-2xl duration-300 ...">
                      <h5 className="max-w-sm text-2xl font-bold text-center md:hover:text-blue-800 md:text-3xl md:text-left">
                          Locations
                      </h5>
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          4
                      </p>
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          Location
                      </p>
                      <button className="mx-w-sm pt-6 text-center md:text-center">
                          View All
                      </button>
                  </Link>
                  <Link to="#" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:hover:shadow-2xl duration-300 ...">
                      <h5 className="max-w-sm text-2xl font-bold text-center md:hover:text-blue-800 md:text-3xl md:text-left">
                          Products
                      </h5>
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          4
                      </p>
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          Location
                      </p>
                      <button className="mx-w-sm pt-6 text-center md:text-center">
                          View All
                      </button>
                  </Link>
                  <Link to="/employees" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:hover:shadow-2xl duration-300 ...">
                      <h5 className="max-w-sm text-2xl font-bold text-center md:hover:text-blue-800 md:text-3xl md:text-left">
                          Employees
                      </h5>
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          221
                      </p>
                      <p className="mx-w-sm text-2xl text-center md:text-left">
                          Location
                      </p>
                      <button className="mx-w-sm pt-6 text-center bg-white md:text-center">
                          View All
                      </button>
                  </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DashBoard