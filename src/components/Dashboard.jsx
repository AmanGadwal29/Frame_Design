// React import
import React from "react";

// Components
import SideBar from "./SideBar";
import FrameVisual from "./FrameVisual";
import Dimensions from "./Dimensions";
import GodDimentions from "./GodDimentions";

// Dashboard layout component
const Dashboard = ({ setTab, tab }) => {
  return (
    <div className="dash-box flex">
      {/* Sidebar to switch tabs */}
      <div>
        <SideBar setTab={setTab} />
      </div>

      {/* Frame visual preview area */}
      <div className="min-w-[80%]">
        <FrameVisual />
      </div>

      {/* Conditional dimension panels */}
      <div className="w-[20%] bg-white">
        {(tab === "" || tab === "frames") && <Dimensions />}
        {(tab === "gods" || tab === "decor") && <GodDimentions />}
      </div>
    </div>
  );
};

export default Dashboard;
