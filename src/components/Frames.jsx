import React, { useContext } from "react";
import framesList from "../FramesData.json";
import { kumuduContext } from "../store/KumuduContext";
const Gods = () => {
  const { setSelectedFrame } = useContext(kumuduContext);

  return (
    <div className="gods-cont flex justify-center mt-[20px]   ">
      {framesList.map((frame) => {
        return (
          <div
            onClick={() => {
              setSelectedFrame(frame.image);
            }}
            className="mx-[50px] hover:cursor-pointer  hover:shadow-xl transition-shadow"
          >
            <img style={{ height: "170px" }} src={frame.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Gods;
