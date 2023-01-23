import React, { useState} from 'react'

function AddingEmployee() {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [joining_date, setJoiningDate] = useState("");
  const [job_title, setJobTitle] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    const employee = {
      name,
      location,
      joining_date,
      job_title
    };

    fetch("https://aim-snb2.onrender.com/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    }).then(() => {
      console.log("new employee added");
    });
    // e.target.reset()
    setName('')
    setLocation('')
    setJobTitle('')
    setJoiningDate('')
  }

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg border-2 shadow-xl border-indigo-600 ">
        <h2 className="text-indigo-500 ml-6 text-3xl font-extrabold tracking-tight ">
          Add New Employee
        </h2>
        <div className="flex flex-col justify-center">
          <form
            className=" p-8 px-8 rounded-lg"
            id="form"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col text-black py-2">
              <label>Employee Name:</label>
              <input
                id="name"
                name="name"
                type="text"
                className=" bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                required
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Designation:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                required
                autoComplete="off"
                id="designation"
                type="text"
                name="jobTitle"
                value={job_title}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Location:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="text"
                required
                autoComplete="off"
                id="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Hire Date:</label>
              <input
                className="bg-gray-200 mt-2 p-2 border-blue-500 focus:bg-gray-200 focus:outline-none"
                type="text"
                required
                autoComplete="off"
                id="hire_date"
                name="joiningDate"
                value={joining_date}
                onChange={(e) => setJoiningDate(e.target.value)}
              />
            </div>
            <button type='submit' className="w-full my-5 py-2 bg-indigo-600 shadow-lg  text-white font-semibold ">
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddingEmployee