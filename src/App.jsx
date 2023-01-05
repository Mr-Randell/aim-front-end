import { useState } from 'react'
// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Signup } from './components/Signup';
// import {  } from "./components";
import { Discover } from "./pages";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Signup />
    </div>
  )
}

export default App
