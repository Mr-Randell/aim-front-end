import React, { useState } from 'react'

function AddingAssets() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setdescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [released_year, setReleasedYear] = useState("");
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const asset = {
      name,
      location,
      description,
      image_url,
      price,
      released_year,
      status,
    };

    fetch("https://aim-snb2.onrender.com/assets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(asset),
    }).then(() => {
      console.log("new employee added");
    });
    setName("");
    setLocation("");
    setdescription("");
    setImageUrl("");
    setPrice("");
    setReleasedYear("");
    setStatus("");
  }
  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg border-2 shadow-xl border-cyan-600 ">
        <h2 className="text-cyan-500 ml-6 text-3xl font-extrabold tracking-tight ">
          Add New Assets
        </h2>
        <div className="flex flex-col justify-center">
          <form
            className=" p-8 px-8 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col text-black py-2">
              <label>Asset Name:</label>
              <input
                className=" bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                required
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Asset Image:</label>
              <textarea
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                required
                id="image_url"
                type="text"
                value={image_url}
                onChange={(e) => setImageUrl(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Description:</label>
              <textarea
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                required
                id="description"
                type="text"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Location:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="text"
                required
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Status:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                required
                id="status"
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Released Year:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="number"
                required
                id="released_year"
                value={released_year}
                onChange={(e) => setReleasedYear(e.target.value)}
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