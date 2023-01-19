import React from "react";
import { NavBar } from "../components";

const Login = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <NavBar />
        <div className="container flex flex-col-reverse justify-center items-center px-6 space-y-0 md:mt-1 md:space-y-0 md:flex-row ">
            {/* transition ease-in-out delay-150 hover-translate-y-1 hover:scale-110 hover:md:shadow-2xl duration-300 ... */}
            <div className="flex flex-col items-center md:mb-32 md:space-y-12 md:relative md:w-1/2">
                <form className="flex flex-col pl-4 w-full md:m-20 ">
                    <div className="flex mt-4">
                        <div className="mt-10 w-full md:mt-60">
                            {/* <input
                            type="text"
                            className="border-b-2 p-3 bg-transparent placeholder:text-2xl placeholder-current mb-6 w-full"
                            placeholder="Username"
                            />
                            <input
                            type="Password"
                            className="border-b-2 p-3 bg-transparent placeholder:text-2xl placeholder-current  mb-6 w-full"
                            placeholder="Password"
                            /> */}
                            <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                                <input
                                id="username"
                                name="username"
                                type="text"
                                className="peer bg-transparent text-2xl w-full p-4 placeholder-transparent transition duration-200"
                                placeholder="Username"
                                />
                                <label for="username" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Username</label>
                            </div>
                            <div className="relative bg-transparent border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                                <input
                                id="password"
                                name="password"
                                type="password"
                                className="peer bg-transparent text-2xl w-full p-4 placeholder-transparent transition duration-200"
                                placeholder="Password"
                                />
                                <label for="password" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text">Password</label>
                            </div>
                            <button
                            className="text-white font-bold text-2xl py-4 w-full mt-3 md:bg-green-700 md:hover:bg-green-600 sm:bg-green-600"
                            type="submit"
                            >
                            Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div
            className="md:-ml-20 md:w-3/4"
            >
                <img src="src/assets/undraw_login.svg" alt="Login" />
            </div>
        </div>
    </div>
  );
}

export default Login;
