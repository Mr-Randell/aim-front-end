import React, { useState } from 'react'
import Header from "../../components/dashboard/Header";
import { ordersData } from "../../data";
import { Reorder } from "framer-motion";
import Pagination from './Pagination';
import { Link } from 'react-router-dom';


function Assets() {
  const [data, setData] = useState(ordersData);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(7);

  // Get current data
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentData = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg border-2 border-teal-600 shadow-xl overflow-x-auto">
        <div className="flex justify-between p-4">
          <Header title="Assets" description="All Our Assets" />
          <div>
            <Link
              to="/asset-Form"
              className="text-white bg-blue-500 p-4 shadow-lg justify-center overflow-hidden capitalize rounded-lg "
            >
              Add asset
            </Link>
          </div>
        </div>
        {/* <Header title="Assets" description="All Our Assets" /> */}
        <div className="-mx-4  px-4  py-4 ">
          <div className="inline-block min-w-full shadow-md rounded-lg  ">
            <Reorder.Group values={currentData} onReorder={setData}>
              <table className="min-w-full overflow-hidden leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Asset
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Released Year
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((cryptocurrency) => (
                    <Reorder.Item as="tr" key={cryptocurrency.OrderID}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 w-10 h-10">
                            <img
                              className="w-full h-full"
                              src={cryptocurrency.ProductImage}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {cryptocurrency.OrderItems}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {cryptocurrency.Description}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {cryptocurrency.Location}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white  text-sm">
                        <p
                          className="text-gray-600 p-2 flex justify-center  rounded-full"
                          style={{
                            background: cryptocurrency.StatusBg,
                          }}
                        >
                          {cryptocurrency.Status}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-600 whitespace-no-wrap">
                          {cryptocurrency.ReleasedYear}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="flex-shrink-0 justify-center bg-green-500 p-2 rounded-sm">
                            <button
                              className="text-white capitalize "
                              // onClick={()=> viewAsset}
                            >
                              {cryptocurrency.link}
                            </button>
                          </div>
                          <div className="ml-2 justify-center bg-blue-500 p-2 rounded-sm">
                            <button
                              className="text-white capitalize "
                              // onClick={()=> editAsset}
                            >
                              {cryptocurrency.link1}
                            </button>
                          </div>
                          <div className="ml-2 justify-center bg-red-500 p-2 rounded-sm">
                            <button
                              className="text-white capitalize"
                              // onClick={()=> deleteAsset}
                            >
                              {cryptocurrency.link2}
                            </button>
                          </div>
                        </div>
                      </td>
                    </Reorder.Item>
                  ))}
                </tbody>
              </table>
              <Pagination
                dataPerPage={dataPerPage}
                totalPosts={data.length}
                paginate={paginate}
              />
            </Reorder.Group>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assets