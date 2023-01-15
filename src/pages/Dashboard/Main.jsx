import React from 'react'
import { Routes, Route } from "react-router-dom";
import SideBar from "../../components/dashboard/SideBar";
import TopNav from '../../components/dashboard/TopNav';
import Assets from "./Assets";
import DashBoard from './DashBoard';
import Employees from "./Employees";
import ProfileForm from "./ProfileForm";
// colour mode
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./thems";
import { useStateContext } from "../../contexts/ContextProvider";

function Main() {
  const [theme, colorMode] = useMode();
   const {activeMenu} = useStateContext();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
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
              <div className="fixed md:static  navbar w-full ">
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
              </div>
            </div>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default Main