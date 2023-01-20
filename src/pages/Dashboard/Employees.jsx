import React, { useState } from 'react'
import Header from '../../components/dashboard/Header';
import {employeesData} from "../../data"
import { Reorder } from "framer-motion";
import { Link } from 'react-router-dom';
import DataTable from '../../components/DataTableBase.jsx';
// import { columns, data } from "../../data.jsx"

function Employees() {
  // const [data, setData] = useState(employeesData)
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const columns =[
    {
      name: 'Id',
      selector: row => row.id,
    },
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Country',
        selector: row => row.country,
    },
    {
        name: 'Hire Date',
        selector: row => row.hire_date,
    },
    {
        name: 'Reports To',
        selector: row => row.reports_to,
    },
  ];

  const data =[
    {
      EmployeeID: 1,
      Name: "Davolio Nancy",
      Title: "Sales Representative",
      HireDate: "01/02/2021",
      Country: "Zambia",
      ReportsTo: "Bilal",
      // EmployeeImage: avatar,
      // link: <AiFillEdit />,
      // link1: <AiFillDelete />,
    },
    {
      EmployeeID: 2,
      Name: "Nasimiyu Danai",
      Title: "Marketing Head",
      HireDate: "01/04/2021",
      Country: "Tanzania",
      ReportsTo: "Randell",
      // EmployeeImage: avatar2,
      // link: <AiFillEdit />,
      // link1: <AiFillDelete />,
    },
    {
      EmployeeID: 3,
      Name: "Abdi abdul",
      Title: "HR",
      HireDate: "01/06/2021",
      Country: "Kenya",
      ReportsTo: "Patrobas",
      // EmployeeImage: avatar3,
      // link: <AiFillEdit />,
      // link1: <AiFillDelete />,
    },
    {
      EmployeeID: 4,
      Name: "Hafsa Nuh",
      Title: "Marketing Head",
      HireDate: "01/01/2020",
      Country: "Malaysia",
      ReportsTo: "Geoffrey",
      // EmployeeImage: avatar4,
      // link: <AiFillEdit />,
      // link1: <AiFillDelete />,
    },
    {
      EmployeeID: 5,
      Name: "Yahya Omar",
      Title: "HR",
      HireDate: "01/02/2020",
      Country: "Canada",
      ReportsTo: "Hafsa",
      // EmployeeImage: avatar5,
      // link: <AiFillEdit />,
      // link1: <AiFillDelete />,
    },
    {
      EmployeeID: 6,
      Name: "Iyan Penjani",
      Title: "Marketing Head",
      HireDate: "01/02/2021",
      Country: "USA",
      ReportsTo: "Bilal",
      // EmployeeImage: avatar6,
      // link: <AiFillEdit />,
      // link1: <AiFillDelete />,
    },
    {
      EmployeeID: 7,
      Name: "Ahmed Vitold",
      Title: "HR",
      HireDate: "01/05/2020",
      Country: "South Africa",
      ReportsTo: "Randell",
      // EmployeeImage: avatar7,
      // link: <AiFillEdit />,
      // link1: <AiFillDelete />,
    },
    {
      EmployeeID: 8,
      Name: "Hali Davolio",
      Title: "Sales Representative",
      HireDate: "01/01/2019",
      Country: "USA",
      ReportsTo: "Patrobas",
      // EmployeeImage: avatar8,
      // link: <AiFillEdit />,
      // link1: <AiFillDelete />,
    },
  ];

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
            <DataTable
              columns={columns}
              data={data}
              // expandableRows
              // expandableRowsComponent={ExpandedComponent}
            />
            {/* <Reorder.Group values={data} onReorder={setData}>
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
                      Reports To
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
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className=" flex-shrink-0 justify-center bg-blue-500 p-2 rounded-sm">
                            <button
                              className="text-white capitalize "
                              // onClick={()=> editemployee}
                            >
                              {cryptocurrency.link}
                            </button>
                          </div>
                          <div className="ml-2 justify-center bg-red-500 p-2 rounded-sm">
                            <button
                              className="text-white capitalize"
                              // onClick={()=> deleteemployee}
                            >
                              {cryptocurrency.link1}
                            </button>
                          </div>
                        </div>
                      </td>
                    </Reorder.Item>
                  ))}
                </tbody>
              </table>
            </Reorder.Group> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Employees