import React, { createContext, useState } from "react";

// Create context with default values and empty setters
export const kumuduContext = createContext({
  frameDimensions: {},
  setFrameDimension: () => {},
  noOfGods: 0,
  setNoOfGods: () => {},
  godList: [],
  setGodList: () => {},
  godDimensions: {},
  setGodDimension: () => {},
  maxGodDimension: {},
  setMaxGodDimension: () => {},
  selectedFrame: "",
  setSelectedFrame: () => {},
  lamp: "",
  setLamp: () => {},
  corner: "",
  setCorner: () => {},
});

const KumuduContextProvider = ({ children }) => {
  // Frame related state
  const [frameDimensions, setFrameDimension] = useState({
    width: "",
    height: "",
  });
  const [selectedFrame, setSelectedFrame] = useState("");
  const [corner, setCorner] = useState("");

  // Gods related state
  const [noOfGods, setNoOfGods] = useState(0);
  const [godList, setGodList] = useState([]);
  const [godDimensions, setGodDimension] = useState({ width: "", height: "" });
  const [maxGodDimension, setMaxGodDimension] = useState({
    width: "",
    height: "",
  });

  // Decoration assets
  const [lamp, setLamp] = useState("");

  return (
    <kumuduContext.Provider
      value={{
        frameDimensions,
        setFrameDimension,
        selectedFrame,
        setSelectedFrame,
        corner,
        setCorner,
        noOfGods,
        setNoOfGods,
        godList,
        setGodList,
        godDimensions,
        setGodDimension,
        maxGodDimension,
        setMaxGodDimension,
        lamp,
        setLamp,
      }}
    >
      {children}
    </kumuduContext.Provider>
  );
};

export default KumuduContextProvider;
