import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
        <div className="container flex flex-col-reverse justify-center items-center px-6 space-y-0 md:mt-1 md:space-y-0 md:flex-row transition ease-in-out delay-150 hover-translate-y-1 hover:scale-110 hover:md:shadow-2xl duration-300 ...">
            <div className="flex flex-col items-center md:mb-32 md:space-y-12 md:relative md:w-1/2">
                <form className="flex flex-col pl-4 w-full md:m-20 ">
                    <div className="flex mt-4">
                        <div className="mt-10 w-full md:mt-60">
                            <input
                            type="text"
                            className="border-b-2 p-3 bg-transparent placeholder:text-2xl placeholder-current mb-6 w-full"
                            placeholder="Username"
                            />
                            <input
                            type="Password"
                            className="border-b-2 p-3 bg-transparent placeholder:text-2xl placeholder-current  mb-6 w-full"
                            placeholder="Password"
                            />
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
