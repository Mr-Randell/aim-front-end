import React, { useEffect } from 'react'
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
import GeographyChart from '../../components/dashboard/GeographyChart';
import BarChart from "../../components/dashboard/BarChart"
import { login , selectUser } from "../../redux/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login"

function Main() {
  const { activeMenu } = useStateContext();
  // const currentuser = useSelector(selectUser);
  // const dispatch = useDispatch();

  // console.log(currentuser);

  // GET /me
  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) =>dispatch(login(user)));
  //     }
  //   });
  // }, []);

  // if(currentuser){
  //   return (
  //     <div className="flex relative ">
  //       {activeMenu ? (
  //         <div className="w-72 fixed sidebar shadow-2xl ">
  //           <SideBar />
  //         </div>
  //       ) : (
  //         <div className="w-0">
  //           <SideBar />
  //         </div>
  //       )}
  //       <div
  //         className={
  //           activeMenu
  //             ? " min-h-screen md:ml-72 w-full"
  //             : "w-full min-h-screen flex-2 "
  //         }
  //       >
  //         <div className="fixed md:static navbar w-full ">
  //           <TopNav currentuser={currentuser} />
  //         </div>
  //         <div>
  //           <div>
  //             <Routes>
  //               dashboard
  //               <Route path="/dashboard" element={<DashBoard />} />
  //               Data
  //               <Route path="/assets" element={<Assets />} />
  //               <Route path="/employees" element={<Employees />} />
  //               Pages
  //               {/* <Route path="/Profile-Form" element={<ProfileForm />} /> */}
  //               <Route path="/asset-Form" element={<AddingAssets />} />
  //               <Route path="/employee-form" element={<AddingEmployee />} />
  //               <Route path="/Calendar" element={<CalendarDate />} />
  //               <Route path="/FAQ" element={<Faq />} />
  //               Locations
  //               {/* <Route path="/bar" element={<BarChart />} /> */}
  //               <Route path="/Geography-Chart" element={<GeographyChart />} />
  //             </Routes>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return <Login />
  // }

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
            <TopNav 
            // currentuser={currentuser}
             />
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
                <Route
                  path="/employee-form"
                  element={<AddingEmployee />}
                />
                <Route path="/Calendar" element={<CalendarDate />} />
                <Route path="/FAQ" element={<Faq />} />
                Locations
                {/* <Route path="/bar" element={<BarChart />} /> */}
                <Route
                  path="/Geography-Chart"
                  element={<GeographyChart />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main