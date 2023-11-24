import React, { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faShareNodes,
  faMicrophone,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import ava from "../assests/ava.png";
import profile1 from "../assests/profile1.png";
import profile2 from "../assests/profile2.png";
import profile3 from "../assests/profile3.png";
import mask1 from "../assests/mask1.png";
import mask2 from "../assests/mask2.png";
import mask3 from "../assests/mask3.png";
import mask4 from "../assests/mask4.png";
import prof from "../assests/prof.png";

const Avatar = () => {
  const imageFiles = [profile1, profile2, profile3, mask1, mask2, mask3, mask4];
  const waveformRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    const waveform = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "violet",
      progressColor: "purple",
      // barWidth: 2,
      // barHeight: 1,
      // responsive: true,
    });

    waveform.on("ready", () => {
      waveform.play();
    });

    waveform.load("../assests/summer.mp3");

    return () => waveform.destroy();
  }, []);

  return (
    <>
      <div className="py-4 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <h2 className="text-white font-bold text-xl mb-6">Output</h2>
        <div className="flex flex-wrap gap-x-4 sm:flex-nowrap">
          <div className="w-[100%] sm:w-[100%] md:w-[70%]">
            <div className="bg-white rad h-[330px]"></div>
            <div className="bg-white bad mb-3 px-10 py-5 border border-b">
              <div
                className="rounded-[58px] mb-5"
                style={{
                  width: "100%",
                  height: "60px",
                  backgroundColor: "#f2f2f2",
                }}
                ref={waveformRef}
              />
              <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center text-black text-sm font-bold mb-2">
                <p className="text-xs">Generated in 18 Seconds</p>
                <ul className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
                  <li className="text-xs mr-3 border border-black py-2 px-4 rounded-[20px] flex items-center mb-2">
                    <FontAwesomeIcon icon={faDownload} className="mr-2" />
                    Download
                  </li>
                  <li className="text-xs mr-3 border border-black py-2 px-4 rounded-[20px] flex items-center mb-2">
                    <FontAwesomeIcon icon={faShareNodes} className="mr-2" />
                    Share
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rad h-[100px]">
              <div className="bg-[#D9D9D9] rad bad flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center px-2 sm:px-5 md:px-10 py-3">
                <ul className="text-black font-bold flex">
                  <li className="mr-3 mb-1 bg-white py-2 px-4 text-xs rounded-[20px]">
                    English
                  </li>
                  <li className="bg-white mb-1 py-2 px-4 text-xs sm:text-xs md:text-sm rounded-[20px] flex items-center">
                    <FontAwesomeIcon icon={faMicrophone} className="mr-2" />
                    Voices
                  </li>
                </ul>
                <button className="bg-[#38A582] mb-1 py-2 px-4 text-xs sm:text-xs md:text-sm rounded-[20px] text-white flex items-center">
                  <FontAwesomeIcon
                    icon={faRecycle}
                    className="mr-2 sm:mr-2 md:mr-5"
                  />
                  Generate
                </button>
              </div>
              <textarea
                className="w-full bg-white text-black text-sm bad h-32 p-5"
                placeholder="Type in text prompt"
              ></textarea>
            </div>
          </div>
          <div className="bg-white w-[100%] sm:w-[100%] md:w-[30%] rounded-[11px] h-screen">
            <h1 className="text-black font-bold text-sm text-center p-3">
              Generate Talking Avatar{" "}
            </h1>
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row px-10">
              <a
                className={`tab tab-bordered text-black font-bold text-xs ${
                  activeTab === 1 ? "tab-active" : ""
                }`}
                onClick={() => handleTabChange(1)}
              >
                Generate
              </a>
              <a
                className={`tab tab-bordered text-black font-bold text-xs ${
                  activeTab === 2 ? "tab-active" : ""
                }`}
                onClick={() => handleTabChange(2)}
              >
                Library
              </a>
              <a
                className={`tab tab-bordered text-black font-bold text-xs${
                  activeTab === 3 ? "tab-active" : ""
                }`}
                onClick={() => handleTabChange(3)}
              >
                Profile
              </a>
            </div>
            <div className="mt-4 h-full">
              {activeTab === 1 && (
                <div className="px-5">
                  <textarea
                    placeholder="Type in text prompt"
                    className="mb-3 bg-[#F6F6F6] border border-black rounded-md text-xs w-full h-32 text-black p-3"
                  ></textarea>
                  <button className="py-3 bg-[#0055AD] text-white text-xs font-bold w-full rounded-[20px]">
                    Generate
                  </button>
                  <div className="pt-5">
                    <h1 className="font-bold text-sm text-black mb-5">
                      Sample
                    </h1>
                    <div className="grid grid-cols-2 mx-auto gap-4 gallery py-3 px-1 h-60 sm:h-60 md:h-96 lg:h-80 scroll-container">
                      {imageFiles.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="px-5 mb-3">
                  <button className="text-black text-xs font-bold w-full py-3 rounded-[20px] bg-[#C0C0C0] items-center flex items-start justify-center">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="flex-shrink-0 pl-2"
                    />
                    <span className=" text-xs flex-grow flex items-center justify-center">
                      Upload
                    </span>
                  </button>
                  <div className="grid grid-cols-2 mx-auto gap-4 py-3 px-1 gallery h-96 scroll-container">
                    {imageFiles.map((image, index) => (
                      <img key={index} src={image} alt={`Image ${index + 1}`} />
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="px-5">
                  <img src={prof} alt="icon figure" />
                  <button className="text-black text-xs font-bold w-full py-3 rounded-[20px] bg-[#C0C0C0]">
                    Upload from computer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
