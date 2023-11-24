import React, { useState } from "react";

const Settings = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="py-4 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <h2 className="text-white font-bold text-sm sm:text-sm md:text-md lg:text-xl mb-6">
          Profile/Security
        </h2>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2 w-full bg-[#142627] text-white rounded-[20px]">
          <div className="border-0 sm:border-0 md:border-r  text-sm my-5 px-5 pt-10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-10 py-2 flex flex-col sm:flex-row border mx-auto border-white text-center rounded-[20px] mb-3 text-sm ${
                  activeTab === index
                    ? "text-white btn-bg px-10 rounded-[20px]"
                    : "text-white"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="mt-2 sm:mt-2 mt:mt-4 lg:mt-4 w-full">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
