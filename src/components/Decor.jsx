import React, { useContext } from "react";
import decor from "../decorData.json";
import { kumuduContext } from "../store/KumuduContext";
const Decor = () => {
  const { setLamp, setCorner } = useContext(kumuduContext);
  return (
    <div className="decor-cont flex justify-center ">
      {decor.lamps.map((lamp, i) => {
        return (
          <div
            onClick={() => setLamp(lamp.image)}
            className="pt-[20px] hover:cursor-pointer hover:shadow-xl transition-shadow"
          >
            <img
              style={{ height: "170px", margin: "0 50px" }}
              src={lamp.image}
              alt=""
            />
          </div>
        );
      })}
      {decor.corner.map((cor) => {
        return (
          <div
            onClick={() => setCorner(cor.image)}
            className="pt-[20px] hover:cursor-pointer hover:shadow-xl transition-shadow"
          >
            <img
              style={{ height: "170px", margin: "0 50px" }}
              src={cor.image}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default Decor;
