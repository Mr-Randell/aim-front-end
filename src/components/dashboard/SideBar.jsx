import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { GiBassetHoundHead } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";

function SideBar() {

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

  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="flex gap-6 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto ">
        <div
          className={`bg-blue-300 min-h-screen  ${
            open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative mb-8">
            {menus?.map((menu) => (
              <div
                key={menu.title}
              >
                <p
                  className={` text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                  style={{ m: "15px 0 5px 20px" }}
                >
                  {menu.title}
                </p>
                {menu.links.map((link, i) => (
                  <Link
                    to={`/${link.name}`}
                    key={i}
                    className={` ${
                      menu?.margin && "mt-5"
                    } group flex items-center text-sm  gap-3.5 font-medium p-4 pl-2 hover:bg-teal-500 rounded-md`}
                  >
                    <div>{link.icon}</div>
                    <h2
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 capitalize ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {link.name}
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      {link.name}
                    </h2>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
    
    
  
}

export default SideBar;
