import React from 'react'

function Pagination({ dataPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="flex m-3 ml-24 p-3 bg-white font-[Poppins] ">
        {pageNumbers.map((number) => (
          <div key={number} className="rounded-l-lg border-2 m-2">
            <button
              onClick={() => paginate(number)}
              className="h-12 w-12  hover:bg-indigo-600 hover:text-white border-indigo-600
               px-4  "
            >
              {number}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pagination