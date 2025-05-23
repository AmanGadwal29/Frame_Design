// React and icons
import React from "react";
import { PiFrameCorners } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";
import { FaUserGroup } from "react-icons/fa6";
import { RiAlignItemLeftLine } from "react-icons/ri";

// Sidebar component for tab selection
const SideBar = ({ setTab }) => {
  return (
    <div className="w-[120px] mt-[50px] fixed">
      <ul>
        {/* Default tab (Dimensions) */}
        <li
          onClick={() => setTab("")}
          className="flex flex-col items-center gap-1.5 my-[40px] hover:cursor-pointer"
        >
          <RxDimensions className="text-4xl" />
          Dimensions
        </li>

        {/* Frames tab */}
        <li
          onClick={() => setTab("frames")}
          className="flex flex-col items-center gap-1.5 my-[40px] hover:cursor-pointer"
        >
          <PiFrameCorners className="text-4xl" />
          Frames
        </li>

        {/* Gods tab */}
        <li
          onClick={() => setTab("gods")}
          className="flex flex-col items-center gap-1.5 my-[40px] hover:cursor-pointer"
        >
          <FaUserGroup className="text-4xl" />
          Gods
        </li>

        {/* Decoratives tab */}
        <li
          onClick={() => setTab("decor")}
          className="flex flex-col items-center gap-1.5 my-[50px] hover:cursor-pointer"
        >
          <RiAlignItemLeftLine className="text-4xl" />
          Decoratives
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
