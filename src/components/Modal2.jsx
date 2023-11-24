import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Modal2 = () => {
  return (
    <>
      <dialog id="modal" className="modal">
        <form
          method="dialog"
          className="modal-box drop max-w-[80%] h-[90%] px-5 sm:px-5 md:px-5 lg:px-32"
        >
          <h1 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:4xl text-center mb-5 sm:mb-5 md:mb-24 lg:mb-32">
            Choose Your Plan
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="bg-black rounded-[13px] w-[13rem] sm:w-[15rem] md:w-[13rem] p-5 relative mb-20 sm:mb-20 md:mb-3 mx-auto">
              <h1 className="font-bold text-xs sm:text-xs md:text-md mb-2">
                Free
              </h1>
              <h2 className="font-bold mb-5">
                <span className="font-extrabold text-3xl">$0/</span>mo
              </h2>
              <ul className="mb-20">
                <li className="mb-5 text-md">
                  <FontAwesomeIcon icon={faCheckCircle} /> Voice Messages
                  Everywhere
                </li>
                <li className="mb-5 text-md">
                  <FontAwesomeIcon icon={faCheckCircle} /> Voice Messages
                  Everywhere
                </li>
                <li className="mb-5 text-md">
                  <FontAwesomeIcon icon={faCheckCircle} /> Voice Messages
                  Everywhere
                </li>
              </ul>
              <button className="bg-[#323232] text-xs sm:text-xs md:text-sm py-2 rounded-[10px] px-4 absolute bottom-5 inset-x-10 text-center">
                Purchased
              </button>
            </div>

            <div className="bg-black rounded-[13px] w-[13rem] sm:w-[15rem] md:w-[13rem] p-5 relative mb-3 mx-auto">
              <h1 className="font-extrabold inset-x-0 -top-[4rem] absolute bg-[#323232] text-center h-24 rounded-[13px] pt-3 mb-3 z-[-1] text-xl">
                Most Popular
              </h1>
              <h1 className="font-bold text-xs sm:text-xs md:text-md mb-2">
                Premium
              </h1>
              <h2 className="font-bold mb-5">
                <span className="font-extrabold text-3xl">$9.99/</span>mo
              </h2>
              <ul className="mb-20">
                <li className="mb-5 text-md">
                  <FontAwesomeIcon icon={faCheckCircle} /> Voice Messages
                  Everywhere
                </li>
                <li className="mb-5 text-md">
                  <FontAwesomeIcon icon={faCheckCircle} /> Voice Messages
                  Everywhere
                </li>
                <li className="mb-5 text-md">
                  <FontAwesomeIcon icon={faCheckCircle} /> Voice Messages
                  Everywhere
                </li>
              </ul>
              <button className="bg-[#323232] text-xs sm:text-xs md:text-sm py-2 rounded-[10px] px-4 absolute bottom-5 inset-x-10 text-center">
                Buy Now
              </button>
            </div>
            <div className="bg-black rounded-[13px] w-[13rem] sm:w-[15rem] md:w-[13rem] p-5 relative mb-3 mx-auto">
              <h1 className="font-bold text-xs sm:text-xs md:text-md mb-2">
                Business
              </h1>
              <h2 className="font-bold mb-5">
                <span className="font-extrabold text-3xl">$29.99/</span>mo
              </h2>
              <ul className="mb-20">
                <li className="mb-5 text-md">
                  <FontAwesomeIcon icon={faCheckCircle} /> Voice Messages
                  Everywhere
                </li>
                <li className="mb-5 text-md">
                  <FontAwesomeIcon icon={faCheckCircle} /> Voice Messages
                  Everywhere
                </li>
                <li className="mb-5 text-md">
                  <FontAwesomeIcon icon={faCheckCircle} /> Voice Messages
                  Everywhere
                </li>
              </ul>
              <button className="bg-[#323232] text-xs sm:text-xs md:text-sm py-2 rounded-[10px] px-4 absolute bottom-5 inset-x-10 text-center">
                Buy Now
              </button>
            </div>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop form-overlay">
          <button className="text-white">close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal2;
