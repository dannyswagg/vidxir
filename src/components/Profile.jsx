import React, { useContext } from "react";
import GlobalContext from "../Context/API";
import axios from "axios";

const Profile = () => {
  const { user, setuser } = useContext(GlobalContext);

  const handleUpdate = () => {
    // axios.put(+process.env.REACT_APP_BACKEND+'api/profile', {user}).then((res)=>{
    //   if(res.data.success){
    //   }
    // })
  };
  return (
    <>
      <dialog id="profile" className="modal">
        <form
          method="dialog"
          className="modal-box drop max-w-[80%] h-[90%] px-5 sm:px-5 md:px-5 lg:px-32"
          onSubmit={handleUpdate}
        >
          <h1 className="font-bold text-2xl sm:text-2xl md:text-2xl lg:4xl text-center mb-5 sm:mb-5 md:mb-10 lg:mb-10">
            Edit Profile
          </h1>
          <div className="w-[100%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
            <div className="">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setuser({ ...user, firstname: e.target.value });
                }}
                placeholder="E.g Goodluck"
                value={user.firstname}
                className="input border border-white bg-transparent w-full max-w-xs"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                value={user.lastname}
                onChange={(e) => {
                  setuser({ ...user, lastname: e.target.value });
                }}
                placeholder="E.g Efe"
                className="input border border-white bg-transparent w-full max-w-xs"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => {
                  setuser({ ...user, email: e.target.value });
                }}
                placeholder="geecorelimited@help.com"
                className="input border border-white bg-transparent w-full max-w-xs"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="tel"
                placeholder="+234 823 933 2323
                "
                onChange={(e) => {
                  setuser({ ...user, phone: e.target.value });
                }}
                value={user.phone}
                className="input border border-white bg-transparent w-full max-w-xs"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setuser({ ...user, bio: e.target.value });
                }}
                value={user.bio}
                placeholder="E.g CEO/Founder"
                className="input border border-white bg-transparent w-full max-w-xs"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <input
                type="text"
                value={user.country}
                onChange={(e) => {
                  setuser({ ...user, country: e.target.value });
                }}
                placeholder="E.g USA"
                className="input border border-white bg-transparent w-full max-w-xs"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">City/Texas</span>
              </label>
              <input
                type="text"
                placeholder="E.g Texas"
                onChange={(e) => {
                  setuser({ ...user, city: e.target.value });
                }}
                value={user.city}
                className="input border border-white bg-transparent w-full max-w-xs"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">postal Code</span>
              </label>
              <input
                value={user.postalcode}
                onChange={(e) => {
                  setuser({ ...user, postalcode: e.target.value });
                }}
                type="Number"
                placeholder="E.g 12345678"
                className="input border border-white bg-transparent w-full max-w-xs"
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Tax Id</span>
              </label>
              <input
                type="Number"
                onChange={(e) => {
                  setuser({ ...user, taxid: e.target.value });
                }}
                value={user.taxid}
                placeholder="E.g 112345678"
                className="input border border-white bg-transparent w-full max-w-xs"
              />
            </div>
          </div>
          <button className="bg-white text-xs text-black font-bold flex items-center justify-center rounded-[20px] py-2 px-4 mt-3">
            Update
          </button>
        </form>
        <form method="dialog" className="modal-backdrop form-overlay">
          <button className="text-white">close</button>
        </form>
      </dialog>
    </>
  );
};

export default Profile;
