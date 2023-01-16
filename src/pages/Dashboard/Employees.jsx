import React, { useEffect, useState } from 'react'
import Header from '../../components/dashboard/Header';
import {employeesData} from "../../data"
import { Reorder } from "framer-motion";

function Employees() {
  const [data, setData] = useState(employeesData)

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg border-2 border-amber-600 shadow-xl overflow-x-auto" >
        <Header title="Employees" description="Managing the Team Members" />
        <div  className="-mx-4  px-4  py-4 ">
          <div className="inline-block min-w-full shadow-md rounded-lg  ">
            <Reorder.Group values={data} onReorder={setData}>
              <table 
              className="min-w-full overflow-hidden leading-normal"
              >
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
                      Reports To
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Employee ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((cryptocurrency) => (
                    <Reorder.Item as="tr" key={cryptocurrency.EmployeeID}> 
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full rounded-full"
                              src={cryptocurrency.EmployeeImage}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {cryptocurrency.Name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {cryptocurrency.Title}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {cryptocurrency.Country}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {cryptocurrency.HireDate}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {cryptocurrency.ReportsTo}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {cryptocurrency.EmployeeID}
                        </p>
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