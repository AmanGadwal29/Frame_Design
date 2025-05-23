import React, { useContext } from "react";
import presentGodList from "../godsData.json";
import { kumuduContext } from "../store/KumuduContext";
const Gods = () => {
  const { godList, setGodList, noOfGods } = useContext(kumuduContext);
  const handleSelectGod = (god) => {
    setGodList((prevList) => {
      if (prevList.length < noOfGods) {
        return [...prevList, god];
      } else {
        return [...prevList.slice(1), god]; //
      }
    });
  };
  console.log(godList);

  return (
    <div className="gods-cont flex justify-center mt-[20px]   ">
      {presentGodList.map((god) => {
        return (
          <div
            onClick={() => {
              handleSelectGod(god);
            }}
            style={{ boxShadow: "5px 5px 15px gray" }}
            className="mx-[50px] hover:cursor-pointer  hover:shadow-xl transition-shadow"
          >
            <img style={{ height: "170px" }} src={god.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Gods;
