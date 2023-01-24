import React, { useState, useRef, useEffect, useContext } from "react";
import { NavBar } from "../components";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import AuthContext from "../contexts/AuthProvider"
import axios from "../API/axios"
const LOGIN_URL= "/login"
import Main from "./Dashboard/Main"
import Assets from "./Dashboard/Assets";
import loginPic from "../assets/undraw_login.svg"

const Login = () => {
  const {setAuth} = useContext(AuthContext)
  const userRef = useRef()
  const errorRef = useRef()
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState('')
    const [errorMsg , setErrorMsg] = useState('')
    const [success, setSuccess]= useState(false)
    // const dispatch = useDispatch()
    //  const navigate = useNavigate();

    //  
    useEffect(()=>{
      userRef.current.focus()
    },[])
    // 
     useEffect(() => {
       setErrorMsg("")
     }, [username, password]);
    // 
    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({ username, password }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
         console.log(JSON.stringify(response?.data));
        //  console.log(JSON.stringify(response));
        //  const accessToken = response?.data?.accessToken;
        //  const roles = response?.data?.roles;
        setAuth({username, password })
        setUserName('')
        setPassword('')
        setSuccess(true)
      } catch(err){
        if (!err?.response) {
          setErrorMsg("No Server Response");
        }else if (err.response?.status === 400) {
          setErrorMsg("Missing Username or Password");
        } else if (err.response?.status === 401) {
          setErrorMsg("Unauthorized");
        } else {
          setErrorMsg("Login Failed");
        }
        errorRef.current.focus()
      }
    }
    

    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     fetch("https://aim-snb2.onrender.com/login", {
    //       method: "post",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         username: username,
    //         password: password,
    //       }),
    //     }).then((r) => {
    //       if (r.ok) {
    //         r.json().then((user) => {
    //           dispatch(login(user));
    //           setUserName("");
    //           setPassword("");
    //           navigate("/dashboard")
    //           navigate("/assets");
    //         });
    //       } else {
    //         r.json().then((err) => setErrors(err.errors));
    //       }
    //     });
    // }

  return (
    <>
      {success ? (
        // <h1> welcom </h1>
        // <Assets/>
        <Main />
      ) : (

        <div className="h-screen flex flex-col justify-center items-center">
          <NavBar />
          <p
            ref={errorRef}
            className={errorMsg ? "errorMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errorMsg}
          </p>
          <div className="container flex flex-col-reverse justify-center items-center px-6 space-y-0 md:mt-1 md:space-y-0 md:flex-row ">
            {/* transition ease-in-out delay-150 hover-translate-y-1 hover:scale-110 hover:md:shadow-2xl duration-300 ... */}
            <div className="flex flex-col items-center md:mb-32 md:space-y-12 md:relative md:w-1/2">
              <form
                className="flex flex-col pl-4 w-full md:m-20 "
                onSubmit={handleSubmit}
              >
                <div className="flex mt-4">
                  <div className="mt-10 w-full md:mt-60">
                    <div className="relative border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                      <input
                        id="username"
                        // name="username"
                        type="text"
                        autoComplete="off"
                        ref={userRef}
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        className="peer bg-transparent text-2xl w-full p-4 placeholder-transparent transition duration-200"
                        placeholder="Username"
                      />
                      <label
                        htmlFor="username"
                        className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal peer-placeholder-shown:bg-transparent mx-6 transition duration-200 input-text"
                      >
                        Username
                      </label>
                    </div>
                    <div className="relative bg-transparent border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current mb-3 px-2">
                      <input
                        id="password"
                        // name="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="peer bg-transparent text-2xl w-full p-4 placeholder-transparent transition duration-200"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute text-2xl font-semibold text-opacity-80 left-0 -top-2 bg-white p-0.5 transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:font-normal mx-6 transition duration-200 input-text"
                      >
                        Password
                      </label>
                    </div>
                    {/* <Link to="/dashboard"> */}
                    <button
                      className="text-white font-bold text-2xl py-4 w-full mt-3 md:bg-green-700 md:hover:bg-green-600 sm:bg-green-600"
                      type="submit"
                    >
                      Login
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
              </form>
            </div>
            <div className="md:-ml-20 md:w-3/4">
              <img src={loginPic} alt="Login" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
