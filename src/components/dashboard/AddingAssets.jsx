import React from 'react'

function AddingAssets() {
  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-gray-900 rounded-lg border-2 shadow-xl  ">
        <h2
          className="dark:text-white 
        text-3xl font-extrabold tracking-tight "
        >
          Add New Assets
        </h2>
        <div className="flex flex-col justify-center">
          <form
            className=" p-8 px-8 rounded-lg"
            // onSubmit={handleSubmit}
          >
            <div className="flex flex-col text-gray-400 py-2">
              <label>Asset Name:</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                require
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Asset Image:</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                required
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Description:</label>
              <textarea
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                required
                // onChange={}
              ></textarea>
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Location:</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                required
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Status:</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="number"
                required
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Released Year:</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                required
                // onChange={}
              />
            </div>
            <button className="w-full my-5 py-2 bg-cyan-600 shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/30 text-white font-semibold rounded-lg">
              Add Assets
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddingAssets