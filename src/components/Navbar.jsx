import React from "react";
import image from "../assests/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <img src={image} alt="Vidxir" width={100} />
            <h1 className="text-black text-xs sm:text-xs md:text-sm font-bold">
              3D Avatar Generator: Untitled
            </h1>
            <ul className="text-[#000000] text-md font-bold flex">
              <li className="text-xs sm:text-xs md:text-sm mr-5 bg-[#38A582] py-2 px-4 text-white rounded-[20px] flex items-center">
                <FontAwesomeIcon className="mr-2" icon={faPlay} />
                Preview
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
