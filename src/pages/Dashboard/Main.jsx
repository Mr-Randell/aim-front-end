import React from 'react'
import { Routes, Route } from "react-router-dom";
import SideBar from "../../components/dashboard/SideBar";
import TopNav from '../../components/dashboard/TopNav';
import Assets from "./Assets";
import DashBoard from './DashBoard';
import Employees from "./Employees";
import ProfileForm from "./ProfileForm";
import { useStateContext } from "../../contexts/ContextProvider";
import AddingAssets from '../../components/dashboard/AddingAssets';
import AddingEmployee from '../../components/dashboard/AddingEmployee';
import CalendarDate from '../../components/dashboard/Calendar';
import Faq from '../../components/dashboard/Faq';

function Main() {
  const {activeMenu} = useStateContext();

  return (
    <>
      <div className="flex relative ">
        {activeMenu ? (
          <div className="w-72 fixed sidebar shadow-2xl ">
            <SideBar />
          </div>
        ) : (
          <div className="w-0">
            <SideBar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? " min-h-screen md:ml-72 w-full"
              : "w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static navbar w-full ">
            <TopNav />
          </div>
          <div>
            <div>
              <Routes>
                dashboard
                <Route path="/dashboard" element={<DashBoard />} />
                Data
                <Route path="/assets" element={<Assets />} />
                <Route path="/employees" element={<Employees />} />
                Pages
                {/* <Route path="/Profile-Form" element={<ProfileForm />} /> */}
                <Route path="/asset-Form" element={<AddingAssets />} />
                <Route path="/employee-form" element={<AddingEmployee />} />
                <Route path="/Calendar" element={<CalendarDate />} />
                <Route path="/FAQ" element={<Faq />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main