import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiOutlineForm, AiFillAlipayCircle } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { GiBassetHoundHead } from "react-icons/gi";
import { useStateContext } from "../../contexts/ContextProvider";
import { tokens } from "../../pages/Dashboard/thems";
import { useTheme } from "@mui/material";

const SideBar = () => {
  // theme
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // 
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const menus = [
    {
      title: "Dashboard",
      links: [
        {
          name: "dashboard",
          icon: <MdDashboard size={25} />,
        },
      ],
    },
    {
      title: "Pages",
      links: [
        {
          name: "assets",
          icon: <GiBassetHoundHead size={25} />,
        },
        {
          name: "employees",
          icon: <IoMdContacts size={25} />,
        },
      ],
    },
    {
      title: "Apps",
      links: [
        {
          name: "Profile-Form",
          icon: <AiOutlineForm size={25} />,
        },
      ],
    },
  ];

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 border-blue-600 border-r-2 shadow-lg border-b-2 text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 ";

  return (
    <div
      className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 "
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              style={{
                color: colors.grey[100],
              }}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <AiFillAlipayCircle /> <span>AIM</span>
            </Link>
          </div>
          <div className="mt-10">
            {menus.map((item) => (
              <div key={item.title}>
                <p
                  className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase"
                  style={{
                    color: colors.grey[100],
                  }}
                >
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={{
                      color: colors.grey[100],
                    }}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;

