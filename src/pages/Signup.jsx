import React from "react";
// import '../App.css'

const Signup = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      {/* <div className="flex border flex-col mb-4 text-2xl">Sign Up here</div> */}
      <div className="container mx-auto border-spacing-6 md:h-flex md:transition md:ease-in-out md:delay-150 md:hover-translate-y-1 md:hover:scale-110 md:hover:md:shadow-2xl md:duration-300 ...">
        <form className="flex flex-col m-10 ">
          <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
            <input
              id="username"
              name="username"
              type="text"
              className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
              placeholder="Username"
            />
            <label for="username" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Username</label>
          </div>
          <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
            <input
              id="password"
              name="password"
              type="password"
              className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
              placeholder="Password"
            />
            <label for="password" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Password</label>
          </div>
          <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
            <input
              id="company_name"
              name="company_name"
              type="text"
              className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
              placeholder="Company Name"
            />
            <label for="company_name" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Company Name</label>
          </div>
          <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
            <input
              id="phone"
              name="phone_number"
              type="tel"
              className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
              placeholder="Phone Number"
            />
            <label for="phone" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Phone Number</label>
          </div>
          {/* <input
            type="password"
            className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current mb-3 mx-2"
            placeholder="Password"
          /> */}
          {/* <input
            type="text"
            className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current mb-3 mx-2"
            placeholder="Company Name"
          /> */}
          {/* <input
            type="tel"
            className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current mb-3 mx-2"
            placeholder="Phone Number"
          /> */}
          <div className="flex mt-4">
            <div className="w-1/2 pr-2">
              {/* <input
                type="text"
                className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 mx-2 w-11/12"
                placeholder="Country"
              /> */}
              <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                <input
                  id="country"
                  name="country"
                  type="text"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="Country"
                />
                <label for="country" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Country</label>
              </div>
            </div>
            <div className="w-1/2 pl-2">
              {/* <input
                type="text"
                className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 mx-2 w-11/12"
                placeholder="Language"
              /> */}
              <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                <input
                  id="language"
                  name="language"
                  type="text"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="Language"
                />
                <label for="language" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Language</label>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="hidden md:block w-1/2 pr-2">
              {/* <input
                type="text"
                className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 mx-2 w-11/12"
                placeholder="Company Size"
              /> */}
              <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                <input
                  id="company_size"
                  name="company_size"
                  type="text"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="Company Size"
                />
                <label for="company_size" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Company Size</label>
              </div>
            </div>
            <div className="md:hidden sm:block w-1/2 pl-2">
              {/* <input
                type="text"
                className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 mx-2 w-11/12"
                placeholder="Interests"
              /> */}
              <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                <input
                  id="company_size"
                  name="company_size"
                  type="text"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="Size"
                />
                <label for="company_size" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Size</label>
              </div>
            </div>
            <div className="hidden md:block w-1/2 pl-2">
              {/* <input
                type="text"
                className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 mx-2 w-11/12"
                placeholder="Primary Interest"
              /> */}
              <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                <input
                  id="interests"
                  name="interests"
                  type="text"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="Primary Interests"
                />
                <label for="interests" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Primary Interests</label>
              </div>
            </div>
            <div className="md:hidden sm:block w-1/2 pl-2">
              {/* <input
                type="text"
                className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 mx-2 w-11/12"
                placeholder="Interests"
              /> */}
              <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                <input
                  id="interests"
                  name="interests"
                  type="text"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="Interests"
                />
                <label for="interests" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Interests</label>
              </div>
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