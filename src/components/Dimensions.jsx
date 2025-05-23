import React, { useContext, useState } from "react";
import { kumuduContext } from "../store/KumuduContext";

const Dimensions = () => {
  // Get setters from context
  const { setFrameDimension, setNoOfGods } = useContext(kumuduContext);

  // Local state for frame dimensions and number of gods
  const [dimensions, setDimensions] = useState({ width: "", height: "" });
  const [noOfGods, setNoOfGodsLocal] = useState(0);

  // Handle form submission: update context states
  const handleSubmit = (e) => {
    e.preventDefault();
    setFrameDimension(dimensions);
    setNoOfGods(noOfGods);
  };

  // Update dimensions on input change
  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    setDimensions((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-[120px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[20px] p-[20px]"
      >
        {/* Inputs for width & height */}
        <div className="flex gap-[20px]">
          <div className="w-[150px] bg-gray-200 p-2 text-black rounded">
            <label className="block mb-1">Dimensions</label>
            <input
              className="border w-full mb-2 p-1 text-black"
              placeholder="Width"
              type="text"
              name="width"
              value={dimensions.width}
              onChange={handleDimensionChange}
            />
            <input
              className="border w-full p-1 text-black"
              placeholder="Height"
              type="text"
              name="height"
              value={dimensions.height}
              onChange={handleDimensionChange}
            />
          </div>

          {/* Input for number of gods */}
          <div className="w-[130px] bg-gray-200 p-2 text-black rounded">
            <label className="block mb-1">No. of Gods</label>
            <input
              value={noOfGods}
              className="border w-full p-1 text-black"
              type="number"
              min={0}
              onChange={(e) => {
                const val = Math.max(0, Number(e.target.value));
                setNoOfGodsLocal(val);
              }}
            />
          </div>
        </div>

        {/* Save button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
};

export default Dimensions;
