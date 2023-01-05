import React from "react";

export const Signup = () => {
  return (
    <div className="container mx-auto border-4  border-spacing-6 w-3/4">
      <form className="flex flex-col m-10 ">
        <input type="text" className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3" placeholder="Username" />
        <input type="password" className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3" placeholder="Password"/>
        <input type="text" className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3" placeholder="Company Name"/>
        <input type="tel" className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3" placeholder="Phone Number"/>
        <div className="flex mt-4">
          <div className="w-1/2 pr-2">
            <input type="text" className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current font-serif m-3 w-4/5" placeholder="Country" />
          </div>
          <div className="w-1/2 pl-2">
            <input type="text" className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current font-serif m-3 w-4/5" placeholder="Language"/>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2 pr-2">
            <input type="text" className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current font-serif m-3 w-4/5" placeholder="Company Size" />
          </div>
          <div className="w-1/2 pl-2">
            <input type="text" className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current font-serif m-3 w-4/5" placeholder="Primary Interest"/>
          </div>
        </div>
        <div className="container mx-auto border-2 m-5 p-3 border-spacing-4 bg-sky-500/5"> 
          <p className="text-xl text-center font-serif"> By clicking on Start Now, you accept our <u>Subscription Agreement</u> and <u>Privacy Policy</u></p>
        </div>
        <button className="float-right bg-blue-500 hover:bg-blue-900 text-white font-bold text-2xl py-4 w-1/6  right-0 font-serif" type="submit" >
          Sign Up
        </button>
      </form>
    </div>
  );
};
