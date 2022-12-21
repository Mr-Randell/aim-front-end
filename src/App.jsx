import { useState } from 'react'
// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
// import {  } from "./components";
import { Discover } from "./pages";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Discover />} />
      </Routes>
    </div>
  )
}

export default App
