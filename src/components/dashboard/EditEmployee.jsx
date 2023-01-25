import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [joining_date, setJoiningDate] = useState("");
  const [job_title, setJobTitle] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const data = {
    name,
    location,
    joining_date,
    job_title,
  };

  useEffect(() => {
    fetch(`https://aim-snb2.onrender.com/employees/${id}`).then((res) => {
      setName(res.data.name);
      setLocation(res.data.location);
      setJoiningDate(res.data.joining_date);
      setJobTitle(res.data.job_title);
    });
  }, []);

  function Update(e) {
    e.preventDefault();
    fetch(`https://aim-snb2.onrender.com/employees/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(navigate("/employees"))
    };
  
  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg border-2 shadow-xl border-indigo-600 ">
        <h2 className="text-indigo-500 ml-6 text-3xl font-extrabold tracking-tight ">
          Edit Employee
        </h2>
        <div className="flex flex-col justify-center">
          <form
            className=" p-8 px-8 rounded-lg"
            id="form"
            onSubmit={Update}
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
            <button onClick={Update} type='submit' className="w-full my-5 py-2 bg-indigo-600 shadow-lg  text-white font-semibold ">
              Update Employee
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditEmployee