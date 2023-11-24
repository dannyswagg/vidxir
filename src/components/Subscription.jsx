import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import card1 from "../assests/card1.png";
import card2 from "../assests/card2.png";
import Modal2 from "./Modal2";

const Subscription = () => {
  return (
    <>
      <div className="py-4 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="flex justify-between">
          <h2 className="text-white font-bold text-sm sm:text-sm md:text-md lg:text-xl mb-6">
            Subscription
          </h2>
          <div className="">
            <button
              onClick={() => window.modal.showModal()}
              className="text-black bg-white py-1 px-2 sm:py-1 md:py-2 lg:py-2 sm:px-2 md:px-3 text-xs sm:text-xs md:text-md rounded-md font-bold"
            >
              Change Plan
            </button>
            <Modal2 />
          </div>
        </div>
        <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-white mb-5">
          Card with information of subscriptions details
        </p>
        <div className="rounded-[30px] relative bg-white w-[13rem] sm:w-[14rem] md:w-[20rem] p-5 h-52 mb-5">
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between">
            <div>
              <h1 className="text-black font-extrabold text-lg">
                Current Plan
              </h1>
              <p className="text-xs">235 days remaining</p>
            </div>
            <div>
              <h1 className="text-black">
                <span className="font-extrabold text-black">$8/</span>Month
              </h1>
            </div>
          </div>
          <button className="text-sm absolute btn-bg bottom-5 text-black font-bold px-4 py-2 rounded-[30px]">
            Cancel Subscription
          </button>
        </div>
        <div className="flex justify-between border border-white p-5 rounded-[20px] mb-5 text-white">
          <div>
            <h1 className="font-bold mb-3">Enable Auto Renew</h1>
            <p className="text-sm">
              This option: if checked, will renew your productive subscription,
              if the current plan expires.
            </p>
          </div>
          <div>
            <label className="cursor-pointer label">
              <input type="checkbox" className="toggle toggle-secondary" />
            </label>
          </div>
        </div>
        <div className="card-history mb-5">
          <h1 className="font-bold text-white mb-5">Payment method</h1>
          <div className="flex flex-col sm:mx-0 sm:flex-col md:flex-row lg:flex-row">
            <img
              className="mr-0 sm:mr-0 md:mr-3 lg:mr-3 mb-5"
              src={card2}
              alt="debit card"
            />
            <img
              className="mr-0 sm:mr-0 md:mr-3 lg:mr-3 mb-5"
              src={card1}
              alt="debit card"
            />{" "}
            <div className="mb-5 bg-white rounded-[5px] w-full sm:w-44 md:w-44 lg:w-40 flex items-center justify-center">
              <Link>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-black font-bold"
                />
              </Link>
            </div>
          </div>
          {/* Table */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
