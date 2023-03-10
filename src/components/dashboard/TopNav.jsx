import React, { useEffect} from "react";
import {MdKeyboardArrowDown} from "react-icons/md";
import {HiOutlineMenuAlt3} from "react-icons/hi"
import avatar from "../../assets/myself.jpeg";
import { useStateContext } from '../../contexts/ContextProvider';
import UserProfile from "./UserProfile";
import {FaUserCircle} from "react-icons/fa"

const NavButton = ({ customFunc, icon, color, dotColor }) => (
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
);

const TopNav = (
  // { currentuser }
  ) => {

  // const { username, role, email } = currentuser;
  // console.log(username);
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<HiOutlineMenuAlt3 />}
      />
      <div className="flex">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("userProfile")}
        >
          <FaUserCircle className="rounded-full w-8 h-8" />
          {/* <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          /> */}
          <p>
            <span className="text-gray-400 text-14">Hi,</span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">
              {/* {currentuser.username} */}
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>

        {isClicked.userProfile && <UserProfile 
        // currentuser={currentuser} 
        />}
      </div>
    </div>
  );
};

export default TopNav;
