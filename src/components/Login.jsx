import React, { useState } from "react";
import login from "../assets/undraw_login.svg"

function Login() {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username , password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
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

  function onLogin(user) {
    setUser(user);
  }

  return (
    <div
      className="container mx-auto border-4  border-spacing-6 bg-no-repeat bg-right bg-bottom-70 bg-size-50x50 max-w-screen-sm max-w-screen-xl xl:h-4/5"
      style={{ backgroundImage: {login} }}
    >
      <form onSubmit={ handleSubmit } className="flex flex-col m-20 ">
        <div className="flex mt-4">
          <div className="md:w-1/2 mt-60">
            <input
              type="text"
              id="username"
              value={ username }
              onChange={(e) => setUsername(e.target.value)}
              className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current font-serif m-3 w-4/5"
              placeholder="Username"
            />
            <input
              type="Password"
              id="password"
              value={ password }
              onChange={(e) => setPassword(e.target.value)}
              className="border-0 border-b-2 p-3 placeholder:text-2xl placeholder-current font-serif m-3 w-4/5"
              placeholder="Password"
            />
            <button
              className="bg-lime-600 hover:bg-lime-900 text-white font-bold text-2xl py-4 w-4/5  left-0 font-serif m-3"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
