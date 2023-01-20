import React, { useState } from "react";

export const Signup = () => {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [primaryInterest, setPrimaryInterest] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username , password, companyName, phoneNumber, country, language, companySize, primaryInterest }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onSignUp(user));
      }
    });
  }

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onSignUp(user) {
    setUser(user);
  }

  return (
    <div className="container mx-auto border-4  border-spacing-6 max-w-screen-sm max-w-screen-xl xl:h-4/5">
      <form className="flex flex-col m-10 ">
        <input
          type="text"
          id="username"
          value={ username }
          onChange={(e) => setUsername(e.target.value)}
          className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3"
          placeholder="Username"
        />
        <input
          type="password"
          id="password"
          value={ password }
          onChange={(e) => setPassword(e.target.value)}
          className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3"
          placeholder="Password"
        />
        <input
          type="text"
          id="companyName"
          value={ companyName }
          onChange={(e) => setCompanyName(e.target.value)}
          className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3"
          placeholder="Company Name"
        />
        <input
          type="tel"
          id="phoneNumber"
          value={ phoneNumber }
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border-0 border-b-2 p-4 placeholder:text-2xl placeholder-current font-serif m-3"
          placeholder="Phone Number"
        />
        <div className="flex mt-4">
          <div className="w-1/2 pr-2">
            <input
              type="text"
              id="country"
              value={ country }
              onChange={(e) => setCountry(e.target.value)}
              className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current font-serif m-3 w-4/5"
              placeholder="Country"
            />
          </div>
          <div className="w-1/2 pl-2">
            <input
              type="text"
              id="language"
              value={ language }
              onChange={(e) => setLanguage(e.target.value)}
              className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current font-serif m-3 w-4/5"
              placeholder="Language"
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className="w-1/2 pr-2">
            <input
              type="text"
              id="companySize"
              value={ companySize }
              onChange={(e) => setCompanySize(e.target.value)}
              className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current font-serif m-3 w-4/5"
              placeholder="Company Size"
            />
          </div>
          <div className="w-1/2 pl-2">
            <input
              type="text"
              id="primaryInterest"
              value={ primaryInterest }
              onChange={(e) => setPrimaryInterest(e.target.value)}
              className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current font-serif m-3 w-4/5"
              placeholder="Primary Interest"
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
          className="float-right bg-blue-500 hover:bg-blue-900 text-white font-bold text-2xl py-4 sm:w-1/4 xl:w-1/6  right-0 font-serif"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
