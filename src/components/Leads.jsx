import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

const Leads = () => {
  const data = {
    labels: ["New", "Returning", "Inactive"],
    datasets: [
      {
        data: [62, 13, 23],
        backgroundColor: ["aqua", "red", "blue"],
      },
    ],
  };

  const options = {};
  return (
    <>
      <div className="py-4 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="flex justify-between">
          <h2 className="text-white font-bold text-sm sm:text-sm md:text-md lg:text-xl mb-6">
            Leads Generator
          </h2>
          <div>
            <button
              onClick={() => window.my_modal_2.showModal()}
              className="text-black bg-white py-1 px-2 sm:py-1 md:py-2 lg:py-2 sm:px-2 md:px-3 text-xs sm:text-xs md:text-md rounded-md font-bold"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add New Lead
            </button>
            <Modal />
          </div>
        </div>
        <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-white mb-5">
          Lead description of what it is all about...
        </p>
        <div className="flex flex-col mx-auto sm:flex-col md:flex-row lg:flex-row gap-8 my-5">
          <div className="w-full sm:w-full md-[16rem] lg:w-[16rem] bg-white rounded-2xl p-4">
            <h1 className="text-black font-extrabold text-2xl">4,209</h1>
            <h2 className="text-sm">Total Generated Leads</h2>
            <div className="flex justify-between">
              <ul className="my-auto text-black text-xs font-bold">
                <li>62% New</li>
                <li>13% Return</li>
                <li>23% Inactive</li>
              </ul>
              <div className="w-32">
                <Doughnut
                  data={data}
                  options={{
                    plugins: {
                      legend: {
                        display: false, // Hide the chart legend
                      },
                    },
                  }}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-full  md-[16rem] lg:w-[16rem] bg-white rounded-2xl p-4">
            <h1 className="text-black font-extrabold text-2xl">1,302</h1>
            <h2 className="text-sm">Total Companies</h2>
            <div className="flex justify-between">
              <ul className="my-auto text-black text-xs font-bold">
                <li>40% Paid</li>
                <li>60% Trial</li>
              </ul>
              <div className="w-32">
                <Doughnut
                  data={data}
                  options={{
                    plugins: {
                      legend: {
                        display: false, // Hide the chart legend
                      },
                    },
                  }}
                  height={200}
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-full  md-[16rem] lg:w-[16rem] bg-white rounded-2xl p-4">
            <h1 className="text-black text-2xl font-extrabold">1,302</h1>
            <h2 className="text-sm">Total Used Tokens</h2>
            <div className="flex justify-between">
              <ul className="my-auto text-black text-xs font-bold">
                <li>40% Paid</li>
                <li>60% Trial</li>
              </ul>
              <div className="w-32">
                <Doughnut
                  data={data}
                  options={{
                    plugins: {
                      legend: {
                        display: false, // Hide the chart legend
                      },
                    },
                  }}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full outline- rounded-md h-60 bg-white p-5 text-black">
          <h1 className="font-bold">List of Generated Leads</h1>
        </div>
      </div>
    </>
  );
};

export default Leads;
