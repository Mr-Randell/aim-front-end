import { useState } from 'react'
// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import { Signup } from './components/Signup';
import UserInventoryForm from './components/UserInventoryForm';
// import {  } from "./components";
import { Overview } from "./pages";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container flex-col items-center h-screen mx-auto">
      <Routes>
        <Route path="/" element={ <Overview />} />
      </Routes>
      <Login />
      <UserInventoryForm />
      <Signup />
    </div>
  )
}

export default App
