import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHome,
  faRightFromBracket,
  faVideo,
  faFolder,
  faCog,
  faBell,
  faCoins,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import profile from "../assests/profile.png";
import GlobalContext from "../Context/API";

const Side = () => {
  const [open, setOpen] = useState(true);
  const { user, setuser } = useContext(GlobalContext);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
      if (isMobile) {
        setOpen(false); // Automatically close the sidebar on mobile
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? "w-[230px]" : "w-20"
          } p-5 pt-10 duration-300 h-screen relative sidebar`}
        >
          <div className="header">
            <img
              src={user.image && user.image !== "" ? user.image : profile}
              alt="profile icon"
              className={`${
                !open && "w-6 h-6"
              } mx-auto mb-5 object-cover w-32 h-32`}
              style={{ borderRadius: "50%" }}
            />
            <h1
              className={` ${
                !open && "hidden"
              } text-center font-bold text-[#fafafa]`}
            >
              Geecore Limited
            </h1>
            <div className="flex text-[#C49C00] mb-10 items-center justify-center">
              <FontAwesomeIcon icon={faCoins} className="" />
              <span className={`${!open && "hidden"} pl-2 font-bold`}>
                1,000
              </span>
            </div>
          </div>

          <FontAwesomeIcon
            onClick={toggleSidebar}
            icon={faArrowRight}
            className={`absolute cursor-pointer text-black bg-white rounded-md -right-3 top-14 w-5 border ${
              !open && "rotate-180"
            }`}
          />
          <div className="flex gap-x-4 items-center justify-center"></div>
          <ul className="mx-auto">
            <Link to="/">
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 mb-2 hover:text-black hover:bg-white rounded-md`}
              >
                <FontAwesomeIcon
                  icon={faHome}
                  className={`${!open && "mx-auto"}`}
                />
                <span className={`${!open && "hidden"} duration-200`}>
                  Dashboard
                </span>
              </li>
            </Link>
            <Link to="/video">
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 mb-2 hover:text-black hover:bg-white rounded-md`}
              >
                <FontAwesomeIcon
                  icon={faFolder}
                  className={`${!open && "mx-auto"}`}
                />
                <span className={`${!open && "hidden"} duration-200`}>
                  Video
                </span>
              </li>
            </Link>
            <Link to="/leads">
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 mb-2 hover:text-black hover:bg-white rounded-md`}
              >
                <FontAwesomeIcon
                  icon={faVideo}
                  className={`${!open && "mx-auto"}`}
                />
                <span className={`${!open && "hidden"} duration-200`}>
                  AI Traffic
                </span>
              </li>
            </Link>
            <Link to="/subscription">
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 mb-2 hover:text-black hover:bg-white rounded-md`}
              >
                <FontAwesomeIcon
                  icon={faFolderPlus}
                  className={`${!open && "mx-auto"}`}
                />
                <span className={`${!open && "hidden"} duration-200`}>
                  Subscription
                </span>
              </li>
            </Link>
            <hr className="style-two" />
            <h1
              className={`${!open && "hidden"} text-white font-bold p-2 mt-5`}
            >
              Settings
            </h1>
            <li
              className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 mb-2 hover:text-black hover:bg-white rounded-md`}
            >
              <FontAwesomeIcon
                icon={faBell}
                className={`${!open && "mx-auto mt-5"}`}
              />
              <span className={`${!open && "hidden"} duration-200`}>
                Notifications
              </span>
            </li>
            <Link to="/settings">
              <li
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 mb-2 hover:text-black hover:bg-white rounded-md`}
              >
                <FontAwesomeIcon
                  icon={faCog}
                  className={`${!open && "mx-auto"}`}
                />
                <span className={`${!open && "hidden"} duration-200`}>
                  Settings
                </span>
              </li>
            </Link>
            <li
              className={`text-white font-bold text-sm absolute bottom-0 flex items-center gap-x-4 cursor-pointer p-2 mb-2 hover:text-black rounded-md`}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className={`${!open && "mx-auto"}`}
              />
              <span className={`${!open && "hidden"} duration-200`}>
                Log out
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Side;
