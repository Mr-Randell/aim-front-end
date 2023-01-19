import React from 'react'

function AddingEmployee() {
  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg border-2 shadow-xl border-indigo-600 ">
        <h2 className="text-indigo-500 ml-6 text-3xl font-extrabold tracking-tight ">
          Add New Employee
        </h2>
        <div className="flex flex-col justify-center">
          <form
            className=" p-8 px-8 rounded-lg"
            // onSubmit={handleSubmit}
          >
            <div className="flex flex-col text-black py-2">
              <label>Employee Name:</label>
              <input
                className=" bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                require
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Employee Image:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                required
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Designation:</label>
              <textarea
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                required
                // onChange={}
              ></textarea>
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Location:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="text"
                required
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Hire Date:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="date"
                required
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Reports To:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="text"
                required
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Employee ID:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="number"
                required
                // onChange={}
              />
            </div>
            <button className="w-full my-5 py-2 bg-indigo-600 shadow-lg  text-white font-semibold ">
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddingEmployee