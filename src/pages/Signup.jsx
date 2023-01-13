import React from "react";

const Signup = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      {/* <div className="flex border flex-col mb-4 text-2xl">Sign Up here</div> */}
      <div className="container mx-auto border-spacing-6 md:h-flex transition ease-in-out delay-150 hover-translate-y-1 hover:scale-110 hover:md:shadow-2xl duration-300 ...">
        <form className="flex flex-col m-10 ">
          <input
            type="text"
            className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current mb-3 mx-2"
            placeholder="Username"
          />
          <input
            type="password"
            className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current mb-3 mx-2"
            placeholder="Password"
          />
          <input
            type="text"
            className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current mb-3 mx-2"
            placeholder="Company Name"
          />
          <input
            type="tel"
            className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current mb-3 mx-2"
            placeholder="Phone Number"
          />
          <div className="flex mt-4">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 mx-2 w-11/12"
                placeholder="Country"
              />
            </div>
            <div className="w-1/2 pl-2">
              <input
                type="text"
                className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 mx-2 w-11/12"
                placeholder="Language"
              />
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 mx-2 w-11/12"
                placeholder="Company Size"
              />
            </div>
            <div className="hidden md:block w-1/2 pl-2">
              <input
                type="text"
                className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 mx-2 w-11/12"
                placeholder="Primary Interest"
              />
            </div>
            <div className="md:hidden sm:block w-1/2 pl-2">
              <input
                type="text"
                className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 mx-2 w-11/12"
                placeholder="Interests"
              />
            </div>
          </div>
          <div className="container mx-auto border-2 m-5 p-3 border-spacing-4 bg-sky-500/5">
            <p className="text-xl text-center font-serif">
              {" "}
              By clicking on Start Now, you accept our{" "}
              <u>Subscription Agreement</u> and <u>Privacy Policy</u>
            </p>
          </div>
          <button
            className="p-3 px-6 pt-2 text-white md:bg-blue-800 md:w-1/6 md:hover:bg-blue-700 sm:bg-blue-700"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup