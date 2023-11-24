import React from "react";
import icon from "../assests/icon.png";
import icon2 from "../assests/icon2.png";

const Vodal = () => {
  return (
    <>
      <dialog id="vodal" className="modal">
        <form
          method="dialog"
          className="modal-box drop max-w-[60%] h-[70%] px-4 sm:px-4 md:px-5 lg:px-20 scroll-container"
        >
          <h3 className="font-bold text-lg text-center mb-5">
            Choose Type of Video
          </h3>
          <div className="flex flex-col sm:flex-col md:flex-row gap-x-4 text-black justify-center">
            <div className="bg-white w-full sm:w-full md-60 h-36 rounded-[5px] p-5 flex flex-col justify-between mb-3">
              <img src={icon} alt="" width={50} />
              <p className="text-xs font-bold">Create VSL video</p>
            </div>

            <div className="bg-white w-full sm:w-full md-60 h-36 rounded-[5px] p-5 flex flex-col justify-between mb-3">
              <img src={icon2} alt="" width={50} />
              <p className="text-xs font-bold">Create talking avatar</p>
            </div>
          </div>
          <div className="w-full mt-5 mx-auto">
            <input
              type="text"
              placeholder="Enter video title"
              className="input w-full bg-transparent border border-white"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="flex justify-center mt-5 text-xs font-bold rounded-[20px] py-2 px-8 bg-white text-black w-60">
              Create
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop form-overlay">
          <button className="text-white">close</button>
        </form>
      </dialog>
    </>
  );
};

export default Vodal;
