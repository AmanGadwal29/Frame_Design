// React import
import React from "react";

// Navbar component
const Navbar = () => {
  return (
    <div className="nav-cont flex justify-between px-[60px] h-[65px] w-full items-center bg-white fixed">
      <h1 className="font-bold text-2xl text-gray-700">MagicFrames</h1>
      <ul className="flex gap-5 font-semibold text-gray-600">
        <li>Home</li>
        <li className="border-b-3 text-indigo-600">Create a frame</li>
        <li>Order History</li>
      </ul>
    </div>
  );
};

export default Navbar;
