import React from 'react'

function AddingAssets() {
  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg border-2 shadow-xl border-cyan-600 ">
        <h2 className="text-cyan-500 ml-6 text-3xl font-extrabold tracking-tight ">
          Add New Assets
        </h2>
        <div className="flex flex-col justify-center">
          <form
            className=" p-8 px-8 rounded-lg"
            // onSubmit={handleSubmit}
          >
            <div className="flex flex-col text-black py-2">
              <label>Asset Name:</label>
              <input
                className=" bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                require
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Asset Image:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                required
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Description:</label>
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
              <label>Status:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="text"
                required
                // onChange={}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Released Year:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="date"
                required
                // onChange={}
              />
            </div>
            <button className="w-full my-5 py-2 bg-cyan-600 shadow-lg  text-white font-semibold ">
              Add Assets
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddingAssets