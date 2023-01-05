import React from 'react'
import { Link } from 'react-router-dom'

const Inventories = () => {
  return (
    <section id="inventories">
        <div className="container flex flex-col h-screen justify-center">
            {/* Top Items */}
            <div className="container flex justify-center items-center pt-6 mx-auto mt-10 space-y-0 md:space-x-10 md:flex-row">
                <Link to="#" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4">
                    <h5 className="max-w-sm text-2xl font-bold text-center md:text-3xl md:text-left">
                        Assets
                    </h5>
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
                <Link to="#" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4">
                    <h5 className="max-w-sm text-2xl font-bold text-center md:text-3xl md:text-left">
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
                <Link to="#" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4">
                    <h5 className="max-w-sm text-2xl font-bold text-center md:text-3xl md:text-left">
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
            <div className="container flex justify-center items-center pt-6 mx-auto mt-10 space-y-0 md:space-x-10 md:flex-row">
                <Link to="#" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4">
                    <h5 className="max-w-sm text-2xl font-bold text-center md:text-3xl md:text-left">
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
                <Link to="#" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4">
                    <h5 className="max-w-sm text-2xl font-bold text-center md:text-3xl md:text-left">
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
                <Link to="#" className="flex flex-col items-left p-6 space-y-6 border md:w-1/4">
                    <h5 className="max-w-sm text-2xl font-bold text-center md:text-3xl md:text-left">
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
  )
}

export default Inventories
