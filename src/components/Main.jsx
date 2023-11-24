import React from "react";
import masked from "../assests/masked.png";
import cash from "../assests/cash.png";
import carbon from "../assests/carbon.png";
import vid from "../assests/vid.png";
import bxs from "../assests/bxs.png";
import group from "../assests/group.png";

const Main = () => {
  return (
    <>
      <div className="py-4 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <h2 className="text-white font-bold text-xl mb-6">Dashboard</h2>
        <div className="text-white text-center relative mb-5">
          <img src={masked} alt="masked card" className="w-full h-60 sm:h-56" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-md sm:text-sm md:text-xl lg:text-2xl mb-5">
              AI Generated Videos
            </h1>
            <p className="text-xs sm:text-xs md:text-sm mb-3">
              Maintaining an adequate credit balance is essential for seamless
              usage of our services. By adding credits to your account, <br />{" "}
              you will be able to continue creating, editing, and sharing your
              videos without any interruptions or limitations.
            </p>
            <button className="btn-bg border border-[#119DE5] px-2 md:px-5 py-2 rounded-[56px] text-sm font-bold">
              Get Unlimited Access Now
            </button>
          </div>
        </div>
        {/* Test Start */}

        {/* Test Ends Here */}
        <div className="parent flex flex-col sm:flex-col md:flex-row w-full text-white">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-[100%] sm:w-[100%] md:w-[55%] gap-4 mr-5">
            <div className="btn-pg h-32 rounded-2xl p-3 flex flex-col justify-between">
              <div>
                <img src={cash} alt="dollar" />
              </div>
              <div>
                <p className="text-xs">Credit Points</p>
                <h2 className="font-bold">10,000</h2>
              </div>
            </div>
            <div className="btn-bg h-32 rounded-2xl p-3 flex flex-col justify-between">
              <div>
                <img src={carbon} alt="carbon image" />
              </div>
              <div>
                <p className="text-xs">Rendered Videos</p>
                <h2 className="font-bold">10</h2>
              </div>
            </div>
            <div className="btn-bg h-32 rounded-2xl p-3 flex flex-col justify-between">
              <div>
                <img src={vid} alt="video" />
              </div>
              <div>
                <h2 className="font-bold">Draft Video</h2>
              </div>
            </div>
            <div className="btn-pg h-32 rounded-2xl p-3 flex flex-col justify-between">
              <div>
                <img src={bxs} alt="bxs" />
              </div>
              <div>
                <h2 className="font-bold">Projects</h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 w-[100%] sm:w-[100%] md:w-[45%] gap-4 mt-5 md:mt-0">
            <div className="rounded-2xl">
              <img src={group} alt="" className="h-[12rem] w-full" />
            </div>
            <div className="w-full">
              <button className="btn-bg border border-[#119DE5] rounded-[56px] w-full px-5 py-3 font-bold">
                Create Videos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
