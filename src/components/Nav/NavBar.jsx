import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24 text-black"
      } fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <nav>
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <h1 className="md:cursor-pointer h-9 font-semibold text-3xl">
              AIM
            </h1>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt3 name={`${open ? "close" : "menu"}`} />
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <NavLinks />
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Overview
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="py-7 px-3 inline-block">
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="md:block hidden">
            <button className="bg-blue-800 hover:bg-blue-700 text-white p-3 px-6 pt-2">
              <Link to="/login">Sign In</Link>
            </button>
          </div>

          {/* Mobile nav */}
          <ul
            className={`md:hidden bg-tertiary text-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500   
            ${open ? "left-0" : "left-[100%]"}
            `}
          >
            <NavLinks setOpen={setOpen} open={open} />
            <li onClick={() => setOpen(!open)}>
              <Link to="/" className="py-7 px-3 inline-block">
                Overview
              </Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link to="/dashboard" className="py-7 px-3 inline-block">
                Dashboard
              </Link>
            </li>
            <div className="py-5">
              <button className="bg-blue-800 hover:bg-blue-700 text-white p-3 px-6 pt-2">
                <Link to="/login">Sign In</Link>
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;