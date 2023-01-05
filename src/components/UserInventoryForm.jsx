import React from "react";

function UserInventoryForm() {
  return (
    <div className="container mx-auto border-4  border-spacing-6 w-3/4 h-4/5">
      <div className="m-8 font-serif text-7xl">
        <h1> Inventory Item </h1>
      </div>
      <form className="flex flex-col m-10 ">
        <textarea
          type="Description"
          className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3"
          placeholder="Inventory Description"
        />
        <input
          type="text"
          className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3"
          placeholder="Category"
        />
        <input
          type="text"
          className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3"
          placeholder="Location"
        />
        <input
          type="text"
          className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3"
          placeholder="Employee Name"
        />
        <input
          type="number"
          className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3"
          placeholder="Employee ID"
        />
        <button className="float-right bg-blue-500 hover:bg-blue-900 text-white font-bold text-2xl py-4 w-1/6  right-0 font-serif m-5" type="submit">
          Request Item
        </button>
      </form>
    </div>
  );
}

export default UserInventoryForm;
