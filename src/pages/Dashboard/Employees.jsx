import React, { useEffect, useState } from 'react'
import Header from '../../components/dashboard/Header';
import { Reorder } from "framer-motion";
import { Link } from 'react-router-dom';
const URL = "https://aim-snb2.onrender.com/employees";

function Employees() {
 const [employee, setEmployee]= useState([])
 console.log(employee)

//  Get Employee
const getEmployee =()=>{
  fetch(URL)
    .then((r) => r.json())
    .then((data) => setEmployee(data));

}
  useEffect(()=>{
    getEmployee()
  }, [])

  // Delete Employee
  const deleteEmployee = (id) => {
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const deleteTheEmployee = employee.filter((perEmployee) => {
          return perEmployee.id !== id;
        });
        setEmployee(deleteTheEmployee);
      });
  };

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg border-2 border-amber-600 shadow-xl overflow-x-auto">
        <div className="flex justify-between p-4  ">
          <Header title="Employees" description="Managing the Team Members" />
          <div>
            <Link
              to="/employee-form"
              className="text-white bg-blue-500 p-4 shadow-lg justify-center capitalize rounded-lg "
            >
              Add Employee
            </Link>
          </div>
        </div>
        <div className="-mx-4  px-4  py-4 ">
          <div className="inline-block min-w-full shadow-md rounded-lg  ">
            <Reorder.Group values={employee} onReorder={setEmployee}>
              <table className="min-w-full overflow-hidden leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Employees
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Designation
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Hire Date
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Employee ID
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employee.map((cryptocurrency) => (
                    <Reorder.Item as="tr" key={cryptocurrency.EmployeeID}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {cryptocurrency.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {cryptocurrency.job_title}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {cryptocurrency.location}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {cryptocurrency.joining_date}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {cryptocurrency.id}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className=" flex-shrink-0 justify-center bg-blue-500 p-2 rounded-sm">
                            <button
                              className="text-white capitalize "
                              // onClick={()=> editemployee}
                            >
                              Edit
                            </button>
                          </div>
                          <div className="ml-2 justify-center bg-red-500 p-2 rounded-sm">
                            <button
                              className="text-white capitalize"
                              onClick={()=> deleteEmployee(cryptocurrency.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </td>
                    </Reorder.Item>
                  ))}
                </tbody>
              </table>
            </Reorder.Group>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employees