import { useState } from 'react'
// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {NavBar} from "./components";
// import Login from './components/Login';
// import { Signup } from './components/Signup';
// import UserInventoryForm from './components/UserInventoryForm';
import { Footer } from "./components";
import { Overview, Signup, Login, Dashboard, Main } from "./pages";

function App() {
  const [count, setCount] = useState(0)

  return <>
    <NavBar/>
    {/* <div className="container flex-col items-center h-screen mx-auto"> */}
      <Routes>
        <Route path="/" element={ <Overview />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/dashboard" element={ <Dashboard />} />
        <Route path="/*" element={<Main />} />
      </Routes>
      {/* <Login /> */}
      {/* <UserInventoryForm /> */}
      {/* <Signup /> */}
      <Footer />
    {/* </div> */}
  </>
}

export default App
