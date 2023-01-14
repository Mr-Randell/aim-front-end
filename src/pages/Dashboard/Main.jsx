import React from 'react'
import { Routes, Route } from "react-router-dom";
import SideBar from "../../components/dashboard/SideBar";
import TopNav from '../../components/dashboard/TopNav';
import Assets from "./Assets";
import DashBoard from './DashBoard';
import Employees from "./Employees";
import ProfileForm from "./ProfileForm";

function Main() {
  return (
    <>
      <div className="flex relative h-full">
        <div className="pb-10 sidebar">
          <SideBar />
        </div>
        <div className=" w-full min-h-screen flex-2 ">
          <main className="content">
            <TopNav />
            <div>
              <Routes>
                dashboard
                <Route path="/dashboard" element={<DashBoard />} />
                pages
                <Route path="/assets" element={<Assets />} />
                <Route path="/employees" element={<Employees />} />
                apps
                <Route path="/Profile-Form" element={<ProfileForm />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Main