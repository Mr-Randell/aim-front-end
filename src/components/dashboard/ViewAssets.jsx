import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

function ViewAssets() {
  const { id } = useParams();
  const [view, setVeiw] = useState([]);
  console.log(view)

  useEffect(()=>{
    fetch(`https://aim-snb2.onrender.com/assets/${id}`)
      .then((r) => r.json())
      .then((data) => setVeiw(data));
  }, [])
  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-lg border-2 border-teal-600 shadow-xl overflow-x-auto">
        <div className="h-full w-full flex flex-col  justify-center items-center">
          {view && (
            <div className=" justify-center items-center">
              <div className="w-7/12 flex flex-col space-y-4  ">
                <div className="flex-shrink-0 w-30 h-30">
                  <img src={view.image_url} alt="" className="w-full h-full" />
                </div>
                <div>
                <h2 className="text-black font-bold text-xl">{view.name}</h2>
                </div>
                <h2 className="text-black font-bold text-xl">
                  {view.description}
                </h2>
              </div>
            </div>
          )}
          <Link
            to={`/assets`}
            className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
          >
            Back To Assets
          </Link>
        </div>
      </div>
    </>
  );
}

export default ViewAssets