import React, { useContext, useEffect, useRef } from "react";
import { kumuduContext } from "../store/KumuduContext";

const FrameVisual = () => {
  // Get data from context, grouped logically
  const {
    selectedFrame,
    frameDimensions,
    corner,
    noOfGods,
    godList,
    godDimensions,
    maxGodDimension,
    setMaxGodDimension,
    lamp,
  } = useContext(kumuduContext);

  const oneSize = useRef();

  // Update max god size on change
  useEffect(() => {
    if (oneSize.current) {
      setMaxGodDimension({
        Width: oneSize.current.offsetWidth,
        height: oneSize.current.offsetHeight,
      });
    }
  }, [noOfGods, godDimensions]);

  return (
    <div className="ml-[130px] pt-[70px] min-h-[70vh] bg-gray-300 flex justify-center items-center">
      <div
        style={{ backgroundImage: `url(${selectedFrame})` }}
        className="overflow-x-auto p-[30px] bg-gray-500"
      >
        <div
          style={{
            width: `${Number(frameDimensions.width) * 96 || 500}px`,
            height: `${Number(frameDimensions.height) * 96 || 250}px`,
            display: "grid",
            gridTemplateColumns: `repeat(${Math.max(
              1,
              Number(noOfGods)
            )}, 1fr)`,
          }}
          className="bg-black px-[40px] py-[40px] gap-[50px] relative"
        >
          {/* Frame corners */}
          {corner && (
            <>
              <img
                className="absolute"
                style={{ width: "50px", top: "-10px", left: "0px" }}
                src={corner}
                alt="corner top-left"
              />
              <img
                className="absolute"
                style={{
                  width: "50px",
                  top: "-15px",
                  right: "5px",
                  transform: "rotate(90deg)",
                }}
                src={corner}
                alt="corner top-right"
              />
              <img
                className="absolute"
                style={{
                  width: "50px",
                  bottom: "-10px",
                  right: "0px",
                  transform: "rotate(180deg)",
                }}
                src={corner}
                alt="corner bottom-right"
              />
              <img
                className="absolute"
                style={{
                  width: "50px",
                  bottom: "-15px",
                  left: "3.5px",
                  transform: "rotate(270deg)",
                }}
                src={corner}
                alt="corner bottom-left"
              />
            </>
          )}

          {/* Gods grid */}
          {Array.from({ length: noOfGods }).map((_, i) => (
            <div
              ref={oneSize}
              key={i}
              className="w-full h-full flex justify-center items-center text-black bg-gray-200 font-bold relative"
            >
              {godList[i] ? (
                <img
                  src={godList[i].image}
                  alt={`God ${i + 1}`}
                  style={{
                    width: `${
                      Number(godDimensions.width) * 96 || maxGodDimension.width
                    }px`,
                    height: `${
                      Number(godDimensions.height) * 96 ||
                      maxGodDimension.height
                    }px`,
                  }}
                />
              ) : (
                "Empty"
              )}

              {/* Lamp between gods */}
              {lamp && i < noOfGods - 1 && (
                <div className="absolute bottom-0 right-[-50px]">
                  <img style={{ height: "100px" }} src={lamp} alt="Lamp" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameVisual;
