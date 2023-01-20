import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { userProfileData } from '../../data';
import { useStateContext } from '../../contexts/ContextProvider';
import avatar from "../../assets/myself.jpeg";

const UserProfile = () => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 p-8 rounded-lg w-96 bg-slate-200">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-black">User Profile</p>
        <button
          type="button"
          onClick={() => setIsClicked(initialState)}
          className='p-3 hover:drop-shadow-xl hover:bg-blue-500 rounded-full text-sm'
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-500">
            {" "}
            Hafsa Nuh{" "}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            Administrator{" "}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            info@aim.com{" "}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#c6d8f8]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-500 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <button
          type="button"
          // onClick={() => logout}
          className="p-3 rounded-md w-full hover:drop-shadow-xl bg-blue-500 text-xl text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;