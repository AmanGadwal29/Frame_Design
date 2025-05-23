import React, { useContext, useState } from "react";
import { kumuduContext } from "../store/KumuduContext";

const GodDimentions = () => {
  // Get setter and max dimension from context
  const { setGodDimension, maxGodDimension } = useContext(kumuduContext);

  // Local state for god dimensions input
  const [dimensions, setDimensions] = useState({ width: "", height: "" });

  // Handle input change for dimensions
  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    setDimensions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // On submit, check if god dimensions exceed max allowed frame size
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      maxGodDimension.Width / 96 < dimensions.width ||
      maxGodDimension.height / 96 < dimensions.height
    ) {
      alert("God size exceed the frame");
    } else {
      setGodDimension(dimensions);
    }
  };

  return (
    <div className="pt-[120px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[20px] p-[20px]"
      >
        {/* Inputs for god width and height */}
        <div className="bg-gray-200 p-2 text-black rounded">
          <label className="block mb-1">God's Dimensions</label>
          <input
            className="border w-full mb-2 p-1 text-black"
            placeholder="Width"
            type="number"
            name="width"
            value={dimensions.width}
            onChange={handleDimensionChange}
          />
          <input
            className="border w-full p-1 text-black"
            placeholder="Height"
            type="number"
            name="height"
            value={dimensions.height}
            onChange={handleDimensionChange}
          />
        </div>

        {/* Save button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
};

export default GodDimentions;
