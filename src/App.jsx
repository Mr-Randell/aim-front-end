import { useState } from 'react'
// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
// import Footer from './components/Footer/Footer';
import {Footer  } from "./components";
import { Overview } from "./pages";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="container flex-col items-center h-screen mx-auto"> */}
        <Routes>
          <Route path="/" element={<Overview />} />
        </Routes>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App
