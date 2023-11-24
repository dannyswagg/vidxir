import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCamera } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import Main from "../components/Main";
import Leads from "../components/Leads";
import Video from "../components/Video";
import Settings from "../components/Settings";
import Subscription from "../components/Subscription";
import ava from "../assests/ava.png";
import GlobalContext from "../Context/API";
import Profile from "../components/Profile";
import axios from "axios";
import { Alert } from "antd";
import Avatar from "../components/Avatar";

const DEFAULT_ALERT = { show: false, msg: "Welcome", type: "info" };

const DashboardLayout = () => {
  const { user, setuser } = useContext(GlobalContext);
  const [avatar, setavatar] = useState(null);
  const [password, setpassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passAlert, setpassAlert] = useState(DEFAULT_ALERT);
  useEffect(() => {
    // axios.get(+process.env.REACT_APP_BACKEND+'api/profile').then((res)=>{
    //   if(res.data.success){
    // setuser(res.data.data)
    //   }
    // })
  }, []);

  const handleAvatar = (e) => {
    setavatar(e.target.files[0]);
    // axios.post(+process.env.REACT_APP_BACKEND+'api/profile', {avatar}).then((res)=>{
    //   if(res.data.success){
    //   }
    // })
    let newImage = URL.createObjectURL(e.target.files[0]);
    setuser({ ...user, image: newImage });
  };

  const updatePassword = () => {
    if (password === "" || newPassword === "" || confirmPassword === "") {
      setpassAlert({
        ...passAlert,
        type: "error",
        msg: "All Password Fields are Required",
        show: true,
      });
    } else {
      setpassAlert({
        ...passAlert,
        type: "success",
        msg: "Password Changed Successfully",
        show: true,
      });
      // axios
      //   .patch(+process.env.REACT_APP_BACKEND + "api/profile", {
      //     current_password: password,
      //     password: newPassword,
      //     password_confirmation:confirmPassword})
      //   .then((res) => {
      //     if (res.data.success) {

      //     }else{

      //     }
      //   });
    }
  };

  const tabs = [
    {
      title: "Profile",
      content: (
        <div className="text-white px-5 my-5">
          <h1 className="font-bold mb-5 text-sm sm:text-sm md:text-md lg:text-xl">
            Profile
          </h1>
          <div className="border border-white rounded-[30px] flex flex-col sm:flex-col md:flex-row justify-between p-5 items-center mb-5">
            <div className="flex flex-col sm:flex-col md:flex-row items-center justify-around">
              <div className="relative group">
                <img
                  style={{ height: 120, borderRadius: "50%", width: 120 }}
                  className="object-cover w-full h-full"
                  src={user.image && user.image !== "" ? user.image : ava}
                  alt="profile icon"
                />
                <div className="cursor-pointer absolute w-full h-full inset-0 flex items-center justify-center form-overlay rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-black">
                  <label for="image">
                    <FontAwesomeIcon icon={faCamera} className="text-3xl" />
                  </label>
                  <input
                    id="image"
                    hidden
                    type="file"
                    accept="images/*"
                    onChange={handleAvatar}
                  />
                </div>
              </div>
              <div className="pl-5">
                <h1 className="font-bold m  b-3 text-sm sm:text-sm md:text-md lg:text-xl">
                  {user?.firstname?.toLocaleUpperCase()}{" "}
                  {user.lastname?.toLocaleUpperCase()}
                </h1>
                <p className="text-xs">{user.bio?.toLocaleUpperCase()}</p>
                <p className="text-xs pb-1">
                  {user.country?.toLocaleUpperCase()}
                </p>
              </div>
            </div>
          </div>
          <div className="border border-white rounded-[30px] p-5 mb-5">
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between mb-3">
              <h1 className="fon-bold text-sm sm:text-sm md:text-md lg:text-xl pb-1">
                Personal Information
              </h1>

              <div
                onClick={() => window.profile.showModal()}
                className="cursor-pointer border border-white rounded-[20px] text-xs py-2 px-4 w-fit sm:w-fit md:w-auto"
              >
                <FontAwesomeIcon icon={faEdit} className="mr-3" />
                Edit
              </div>
              <Profile />
            </div>
            <div className="w-[70%]">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-5">
                  <label className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-md">
                    First Name
                  </label>
                  <h1 className="font-bold text-xs sm:text-xs md:text-sm lg:text-md">
                    {user.firstname}
                  </h1>
                </div>
                <div className="mb-5">
                  <label className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-md">
                    Last Name
                  </label>
                  <h1 className="font-bold text-xs sm:text-xs md:text-sm lg:text-md">
                    {user.lastname}
                  </h1>
                </div>
                <div className="mb-5">
                  <label className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-md">
                    Email
                  </label>
                  <h1 className="font-bold text-xs sm:text-xs md:text-sm lg:text-md">
                    {user.email}
                  </h1>
                </div>
                <div className="mb-5">
                  <label className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-md">
                    Phone
                  </label>
                  <h1 className="font-bold text-xs sm:text-xs md:text-sm lg:text-md">
                    {user.phone}
                  </h1>
                </div>
                <div className="mb-5">
                  <label className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-md">
                    Bio
                  </label>
                  <h1 className="font-bold text-xs sm:text-xs md:text-sm lg:text-md">
                    {user.bio}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-white rounded-[30px] p-5">
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between mb-3">
              <h1 className="fon-bold pb-1">Address</h1>
            </div>
            <div className="w-[70%]">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="mb-5">
                  <label className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-md">
                    Country
                  </label>
                  <h1 className="font-bold text-xs sm:text-xs md:text-sm lg:text-md">
                    {user.country}
                  </h1>
                </div>
                <div className="mb-5">
                  <label className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-md">
                    City/State
                  </label>
                  <h1 className="font-bold text-xs sm:text-xs md:text-sm lg:text-md">
                    {user.city}
                  </h1>
                </div>
                <div className="mb-5">
                  <label className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-md">
                    Postal Code
                  </label>
                  <h1 className="font-bold text-xs sm:text-xs md:text-sm lg:text-md">
                    {user.postalcode}
                  </h1>
                </div>
                <div className="mb-5">
                  <label className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-md">
                    Tax ID
                  </label>
                  <h1 className="font-bold text-xs sm:text-xs md:text-sm lg:text-md">
                    {user.taxid}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Security",
      content: (
        <div className="text-white px-5 my-5">
          <h1 className="font-bold mb-5 text-xs sm:text-xs md:text-sm lg:text-md">
            Security
            {passAlert.show && (
              <Alert
                onClose={() => {
                  setpassAlert(DEFAULT_ALERT);
                }}
                message={passAlert.msg}
                closable
                type={passAlert.type}
                showIcon
              />
            )}
          </h1>

          <div className="border border-white rounded-[30px] p-5 mb-5">
            <h1 className="text-xs sm:text-xs md:text-sm lg:text-md">
              Change Password
            </h1>

            <div className="form-control w-full mr-5 mb-5">
              <label className="label">
                <span className="label-text text-xs sm:text-xs md:text-sm lg:text-md">
                  {" "}
                  Current Password
                </span>
              </label>
              <input
                type="password"
                placeholder="XXXXXXXXXX"
                className="input border border-white bg-transparent w-full max-w-xs"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>

            <div className="form-control w-full mr-5 mb-5">
              <label className="label">
                <span className="label-text text-xs sm:text-xs md:text-sm lg:text-md">
                  {" "}
                  New Password
                </span>
              </label>
              <input
                type="password"
                placeholder="XXXXXXXXXX"
                className="input border border-white bg-transparent w-full max-w-xs"
                onChange={(e) => {
                  setnewPassword(e.target.value);
                }}
              />
            </div>
            <div className="form-control w-full mr-5 mb-5">
              <label className="label">
                <span className="label-text text-xs sm:text-xs md:text-sm lg:text-md">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="XXXXXXXXXX"
                className="input border border-white bg-transparent w-full max-w-xs"
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />
            </div>
            {/* <div className="flex justify-center items-center"></div> */}
            <button
              className="border border-white text-white text-white font-bold rounded-[20px] py-2 px-4"
              onClick={updatePassword}
            >
              Update
            </button>
          </div>
          <div className="border border-white rounded-[30px] p-5 mb-5">
            <h1 className="mb-5 font-bold text-xs sm:text-xs md:text-sm lg:text-md">
              2FA Authentication
            </h1>
            <div className="flex items-center justify-between">
              <h2 className="text-xs sm:text-xs md:text-sm lg:text-md">
                Turn On 2FA Auth
              </h2>
              <div>
                <label className="cursor-pointer label">
                  <input type="checkbox" className="toggle toggle-secondary" />
                </label>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="main flex h-screen">
        <Side />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/video" element={<Video />} />
            <Route path="/settings" element={<Settings tabs={tabs} />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/avatar" element={<Avatar />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
