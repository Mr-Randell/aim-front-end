import React from "react";

function UserInventoryForm() {
  return (
    <div className="container  mx-auto border-4  border-spacing-6 max-w-screen-sm max-w-screen-xl xl:h-4/5">
      <div className="m-10 text-lg">
        <p> Kindly Specify the Inventory Item you Wish to Apply For </p>
      </div>
      <form className="flex flex-col m-10">
        <input
          type="Description"
          className="border-0 border-b-2 p-4 placeholder:text-base placeholder-current m-3"
          placeholder="Inventory Item"
        />
        <input
          type="text"
          className="border-0 border-b-2 p-4 placeholder:text-base placeholder-current m-3"
          placeholder="Category"
        />
        <input
          type="text"
          className="border-0 border-b-2 p-4 placeholder:text-base placeholder-current m-3"
          placeholder="Location"
        />
        <input
          type="text"
          className="border-0 border-b-2 p-4 placeholder:text-base placeholder-current m-3"
          placeholder="Employee Name"
        />
        <input
          type="number"
          className="border-0 border-b-2 p-4 placeholder:text-base placeholder-current m-3"
          placeholder="Employee ID"
        />
        <button
          className="bg-blue-800 hover:bg-blue-500 text-white text-lg py-4 sm:w-1/4 xl:w-1/6 right-0 m-5"
          type="submit"
        >
          Request
        </button>
      </form>
    </div>
  );
}

export default UserInventoryForm;
