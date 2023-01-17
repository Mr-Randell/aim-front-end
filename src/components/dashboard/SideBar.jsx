import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiOutlineForm} from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { GiBassetHoundHead } from "react-icons/gi";
import { useStateContext } from "../../contexts/ContextProvider";

const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize} = useStateContext();

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
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 border-blue-600  text-white text-md m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 md:hover:shadow-lg md:hover:shadow-blue-500/50 duration-300 ...";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 ";

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto bg-slate-100 pb-10 ">
      {activeMenu && (
        <>
          <div className="mt-12">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight  text-slate-900"
            >
              <span>AIM</span>
            </Link>
            {menus.map((item) => (
              <div key={item.title}>
                <p className="text-gray-600  m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={{
                      color: "black",
                    }}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize text-black">{link.name}</span>
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

