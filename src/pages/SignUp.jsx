import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components";

const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [industry, setIndustry] = useState("");

  useEffect( () => { 
    userRef.current.focus();
 }, []);

  useEffect( () => { 
    setErrMsg("");
  }, [username, password, companyName, email, country, role, companySize, industry]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://aim-snb2.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, companyName, email, country, role, companySize, industry }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((username) => onSignUp(username));
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
    <div className="h-screen flex flex-col justify-center">
      <NavBar />
      {/* <div className="flex border flex-col mb-4 text-2xl">Sign Up here</div> */}
      <div className="container mx-auto border-spacing-6 mt-20 md:h-flex ">
        {/* md:transition md:ease-in-out md:delay-150 md:hover-translate-y-1 md:hover:scale-110 md:hover:md:shadow-2xl md:duration-300 ... */}
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <form onSubmit={ handleSubmit } className="flex flex-col m-10">
          <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
            <input
              id="username"
              name="username"
              type="text"
              value={ username }
              ref={ userRef }
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
              className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
              placeholder="Username"
              required
            />
            <label for="username" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Username</label>
          </div>
          <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
            <input
              id="password"
              name="password"
              type="password"
              value={ password }
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
              placeholder="Password"
              required
            />
            <label for="password" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Password</label>
          </div>
          <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
            <input
              id="companyName"
              name="companyName"
              type="text"
              value={ companyName }
              onChange={(e) => setCompanyName(e.target.value)}
              autoComplete="off"
              className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
              placeholder="Company Name"
              required
            />
            <label for="companyName" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Company Name</label>
          </div>
          <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
            <input
              id="email"
              name="email"
              type="text"
              value={ email }
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
              placeholder="Email"
              required
            />
            <label for="email" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Email</label>
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
                  value={ country }
                  onChange={(e) => setCountry(e.target.value)}
                  autoComplete="off"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="Country"
                  required
                />
                <label for="country" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Country</label>
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
                  id="role"
                  name="role"
                  type="text"
                  value={ role }
                  onChange={(e) => setRole(e.target.value)}
                  autoComplete="off"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="Role"
                  required
                />
                <label for="role" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Role</label>
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
                  id="companySize"
                  name="companySize"
                  type="text"
                  value={ companySize }
                  onChange={(e) => setCompanySize(e.target.value)}
                  autoComplete="off"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="Company Size"
                  required
                />
                <label for="companySize" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Company Size</label>
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
                  id="companySize"
                  name="companySize"
                  type="text"
                  value={ companySize }
                  onChange={(e) => setCompanySize(e.target.value)}
                  autoComplete="off"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="Size"
                  required
                />
                <label for="companySize" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Size</label>
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
                  id="industry"
                  name="industry"
                  type="text"
                  value={ industry }
                  onChange={(e) => setIndustry(e.target.value)}
                  autoComplete="off"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="industry"
                  required
                />
                <label for="industry" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Industry</label>
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
                  id="industry"
                  name="industry"
                  type="text"
                  value={ industry }
                  onChange={(e) => setIndustry(e.target.value)}
                  autoComplete="off"
                  className="peer text-2xl w-full p-4 placeholder-transparent transition duration-200"
                  placeholder="Interests"
                  required
                />
                <label for="industry" className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text">Industry</label>
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

export default SignUp