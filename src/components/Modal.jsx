import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <form
          method="dialog"
          className="modal-box drop max-w-[80%] h-[90%] px-2 sm:px-2 md:px-5 lg:px-32 scroll-container"
        >
          <h3 className="font-bold text-lg text-center mb-5">Leads Gen.</h3>
          <div className="flex justify-between mb-5">
            <p className="text-sm">
              Generate leads for your business in any industry across all
              countries. <br />
              Receive hundreds of leads in just a few minutes..
            </p>
            <div className="">
              <button className="text-black bg-white rounded-md font-bold py-1 px-2 sm:py-1 md:py-2 lg:py-2 sm:px-2 md:px-3 text-xs sm:text-xs md:text-md">
                Generate Leads
              </button>
            </div>
          </div>
          {/* Gen Form starts */}
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row w-full justify-between">
            <div className="">
              <label className="label">
                <span className="label-text">Choose Leads Type</span>
              </label>
              <input
                type="text"
                placeholder="Select Type"
                className="input border border-white bg-transparent w-full max-w-xs"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Search URL</span>
              </label>
              <input
                type="text"
                placeholder="twitterspace.com"
                className="input border border-white bg-transparent w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text-alt">Optional (Can be empty)</span>
              </label>
            </div>
          </div>
          <div className="mt-2 text-white">
            <h1>Advanced</h1>
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row w-full justify-between mx-auto">
              <div className="flex items-center w-52">
                <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                <label className="cursor-pointer label">
                  <span className="text-xs">Adult Content Filtering</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary ml-10"
                  />
                </label>
              </div>
              <div className="flex items-center w-52">
                <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                <label className="cursor-pointer label">
                  <span className="text-xs">Exclude Auto-corrected</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary ml-10"
                  />
                </label>
              </div>
              <div className="flex items-center w-52">
                <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                <label className="cursor-pointer label">
                  <span className="text-xs">Result Filtering</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-secondary ml-10"
                  />
                </label>
              </div>
            </div>
          </div>
          {/* 8 form rows starts */}
          <div className="w-[100%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-96">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Start</span>
              </label>
              <input
                type="text"
                placeholder="1"
                className="input border border-white bg-transparent w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Number</span>
              </label>
              <input
                type="text"
                placeholder="3000000"
                className="input border border-white bg-transparent w-full max-w-xs h-10"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Search Engine</span>
              </label>
              <select className="select border border-white bg-transparent w-full max-w-xs">
                <option disabled selected>
                  Choose Preferred Search engine
                </option>
                <option>Google</option>
                <option>Bing</option>
                <option>Ask.com</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs mr-10">
              <label className="label">
                <span className="label-text">Search Region</span>
              </label>
              <select className="select border border-white bg-transparent w-full max-w-xs h-10">
                <option disabled selected>
                  Select Region
                </option>
                <option>Africa</option>
                <option>Asia</option>
                <option>Europe</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs mr-10">
              <label className="label">
                <span className="label-text">Language</span>
              </label>
              <select className="select border border-white bg-transparent w-full max-w-xs">
                <option disabled selected>
                  Select Language
                </option>
                <option>English Language</option>
                <option>Latin</option>
                <option>Spanish</option>
                <option>Italian</option>
                <option>French</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs mr-10">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <select className="select border border-white bg-transparent w-full max-w-xs">
                <option disabled selected>
                  Select Country
                </option>
                <option>Nigeria</option>
                <option>London</option>
                <option>South Africa</option>
                <option>Italy</option>
                <option>France</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs mr-10">
              <label className="label">
                <span className="label-text">State</span>
              </label>
              <select className="select border border-white bg-transparent w-full max-w-xs">
                <option disabled selected>
                  Select State
                </option>
                <option>State 1</option>
                <option>State 2</option>
                <option>State 3</option>
                <option>State 4</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs mr-10">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                placeholder="Enter City"
                className="input border border-white bg-transparent w-full max-w-xs"
              />
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

export default Modal;
