import { useState } from 'react'
// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {NavBar} from "./components";
import { Overview ,   Main} from "./pages";
// import Main from './pages/Dashboard/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavBar /> */}
      {/* <div className="container flex-col items-center h-screen mx-auto"> */}
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/*" element={<Main />} />
      </Routes>
      {/* </div> */}
    </>
  );
  
}

export default App
