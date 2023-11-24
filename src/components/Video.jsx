import React from "react";
import group from "../assests/group.png";
import mask1 from "../assests/mask1.png";
import mask2 from "../assests/mask2.png";
import mask3 from "../assests/mask3.png";
import mask4 from "../assests/mask4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Vodal from "./Vodal";

const Video = () => {
  return (
    <>
      <div className="py-4 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="flex justify-between">
          <h2 className="text-white font-bold text-sm sm:text-sm md:text-md lg:text-xl mb-6">
            Generate Your AI Video
          </h2>
          <div className="">
            <button
              onClick={() => window.vodal.showModal()}
              className="text-black bg-white py-1 px-2 sm:py-1 md:py-2 lg:py-2 sm:px-2 md:px-3 text-xs sm:text-xs md:text-md rounded-md font-bold"
            >
              Create Videos
            </button>
            <Vodal />
          </div>
        </div>
        <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-white mb-5">
          Generate Your AI Video contents used to build visedos that you can
          monetize
        </p>
        <div className="text-white font-bold flex flex-row justify-between items-end mb-5">
          <h2 className="text-sm sm:text-sm md:text-md lg:text-xl mr-auto">
            Featured Videos
          </h2>
          <input
            type="text"
            placeholder="Search"
            className="input w-full max-w-xs bg-transparent border border-white"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 py-10 rounded-[15px] border border-white mb-5">
          <div>
            <img className="h-40" src={group} alt="vid" />
          </div>
          <div>
            <img className="h-40" src={group} alt="vid" />
          </div>
          <div>
            <img className="h-40" src={group} alt="vid" />
          </div>
          <div>
            <img className="h-40" src={group} alt="vid" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-white mb-5">Generated Videos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative mx-auto sm:mx-auto md:mx-auto lg:mx-0">
              <img src={mask1} alt="" />
              <div className="group">
                <FontAwesomeIcon
                  className="absolute top-3 right-3 lg:top-6 lg:right-6 cursor-pointer"
                  icon={faEllipsisVertical}
                />
                <div className="top-5 right-5 opacity-0 invisible bg-gray-200 text-gray-800 text-sm rounded-md py-2 absolute z-10 group-hover:opacity-100 group-hover:visible">
                  <ul>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Edit
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Rename
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Delete
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <button className="text-xs text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Preview
              </button>
              <button className="bg-white py-1 px-2 text-xs rounded-[2rem] text-black font-bold absolute inset-x-10 bottom-5">
                Video Test Project
              </button>
            </div>
            <div className="relative mx-auto sm:mx-auto md:mx-auto lg:mx-0">
              <img src={mask2} alt="" />
              <div className="group">
                <FontAwesomeIcon
                  className="absolute top-3 right-3 lg:top-6 lg:right-6 cursor-pointer p-1"
                  icon={faEllipsisVertical}
                />
                <div className="top-5 right-5 opacity-0 invisible bg-gray-200 text-gray-800 text-sm rounded-md py-2 absolute z-10 group-hover:opacity-100 group-hover:visible">
                  <ul>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Edit
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Rename
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Delete
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <button className="text-xs text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Preview
              </button>
              <button className="bg-white py-1 px-2 text-xs rounded-[15px] text-black font-bold absolute inset-x-10 bottom-5">
                Video Test Project
              </button>
            </div>
            <div className="relative mx-auto sm:mx-auto md:mx-auto lg:mx-0">
              <img src={mask3} alt="" />
              <div className="group">
                <FontAwesomeIcon
                  className="absolute top-3 right-3 lg:top-6 lg:right-6 cursor-pointer"
                  icon={faEllipsisVertical}
                />
                <div className="top-5 right-5 opacity-0 invisible bg-gray-200 text-gray-800 text-sm rounded-md py-2 absolute z-10 group-hover:opacity-100 group-hover:visible">
                  <ul>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Edit
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Rename
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Delete
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <button className="text-xs text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Preview
              </button>
              <button className="bg-white py-1 px-2 text-xs rounded-[15px] text-black font-bold absolute inset-x-10 bottom-5">
                Video Test Project
              </button>
            </div>
            <div className="relative mx-auto sm:mx-auto md:mx-auto lg:mx-0">
              <img src={mask4} alt="" />
              <div className="group">
                <FontAwesomeIcon
                  className="absolute top-3 right-3 lg:top-6 lg:right-6 cursor-pointer"
                  icon={faEllipsisVertical}
                />
                <div className="top-5 right-5 opacity-0 invisible bg-gray-200 text-gray-800 text-sm rounded-md py-2 absolute z-10 group-hover:opacity-100 group-hover:visible">
                  <ul>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Edit
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Rename
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Delete
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <button className="text-xs text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Preview
              </button>
              <button className="bg-white py-1 px-2 text-xs rounded-[15px] text-black font-bold absolute inset-x-10 bottom-5">
                Video Test Project
              </button>
            </div>
            <div className="relative mx-auto sm:mx-auto md:mx-auto lg:mx-0">
              <img src={mask4} alt="" />
              <div className="group">
                <FontAwesomeIcon
                  className="absolute top-3 right-3 lg:top-6 lg:right-6 cursor-pointer"
                  icon={faEllipsisVertical}
                />
                <div className="top-5 right-5 opacity-0 invisible bg-gray-200 text-gray-800 text-sm rounded-md py-2 absolute z-10 group-hover:opacity-100 group-hover:visible">
                  <ul>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Edit
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Rename
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Delete
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <button className="text-xs text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Preview
              </button>
              <button className="bg-white py-1 px-2 text-xs rounded-[15px] text-black font-bold absolute inset-x-10 bottom-5">
                Video Test Project
              </button>
            </div>
            <div className="relative mx-auto sm:mx-auto md:mx-auto lg:mx-0">
              <img src={mask3} alt="" />
              <div className="group">
                <FontAwesomeIcon
                  className="absolute top-3 right-3 lg:top-6 lg:right-6 cursor-pointer"
                  icon={faEllipsisVertical}
                />
                <div className="top-5 right-5 opacity-0 invisible bg-gray-200 text-gray-800 text-sm rounded-md py-2 absolute z-10 group-hover:opacity-100 group-hover:visible">
                  <ul>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Edit
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Rename
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Delete
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <button className="text-xs text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Preview
              </button>
              <button className="bg-white py-1 px-2 text-xs rounded-[15px] text-black font-bold absolute inset-x-10 bottom-5">
                Video Test Project
              </button>
            </div>
            <div className="relative mx-auto sm:mx-auto md:mx-auto lg:mx-0">
              <img src={mask2} alt="" />
              <div className="group">
                <FontAwesomeIcon
                  className="absolute top-3 right-3 lg:top-6 lg:right-6 cursor-pointer"
                  icon={faEllipsisVertical}
                />
                <div className="top-5 right-5 opacity-0 invisible bg-gray-200 text-gray-800 text-sm rounded-md py-2 absolute z-10 group-hover:opacity-100 group-hover:visible">
                  <ul>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Edit
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Rename
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Delete
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <button className="text-xs text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Preview
              </button>
              <button className="bg-white py-1 px-2 text-xs rounded-[15px] text-black font-bold absolute inset-x-10 bottom-5">
                Video Test Project
              </button>
            </div>
            <div className="relative mx-auto sm:mx-auto md:mx-auto lg:mx-0">
              <img src={mask1} alt="" />
              <div className="group">
                <FontAwesomeIcon
                  className="absolute top-3 right-3 lg:top-6 lg:right-6 cursor-pointer"
                  icon={faEllipsisVertical}
                />
                <div className="top-5 right-5 opacity-0 invisible bg-gray-200 text-gray-800 text-sm rounded-md py-2 absolute z-10 group-hover:opacity-100 group-hover:visible">
                  <ul>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Edit
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Rename
                      </li>
                    </Link>
                    <Link>
                      <li className="py-1 px-2 hover:bg-black hover:text-white">
                        Delete
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <button className="text-xs text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Preview
              </button>
              <button className="bg-white py-1 px-2 text-xs rounded-[15px] text-black font-bold absolute inset-x-10 bottom-5">
                Video Test Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
