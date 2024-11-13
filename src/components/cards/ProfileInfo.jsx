import React, { useState } from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ OnLogout, userInfo }) => {
  const [isHovered, setIsHovered] = useState(false);
  // console.log(userInfo);

  return (
    <div className="flex justify-end items-center lg:gap-4 md:gap-3 gap-1 ml-2">
      {/* Profile Circle */}
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
        className="flex items-center justify-center p-1 text-slate-950 font-medium bg-slate-100 hover:bg-slate-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {getInitials(userInfo?.user?.username)} {/* Show initials */}
      </div>

      {/* Username (visible on larger screens) */}
      <div className="md:block hidden text-center">
        <p className="text-sm uppercase">{userInfo?.user?.username}</p>
      </div>

      {/* Conditional rendering for hover (optional display for hover effect) */}
      {isHovered && (
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-[#222222] text-white rounded-md shadow-md uppercase font-bold">
          {userInfo?.user?.username}
        </div>
      )}

      {/* Logout Button */}
      <button
        className="text bg-red-500 p-[6px] rounded-md text-white hover:opacity-80"
        onClick={OnLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileInfo;
