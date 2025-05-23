// React and state
import React, { useState } from "react";

// Components
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Gods from "../components/Gods";
import Decor from "../components/Decor";
import Frames from "../components/Frames";

// Home page component
const Home = () => {
  const [tab, setTab] = useState(""); // To manage selected tab

  return (
    <>
      <Navbar />
      <Dashboard tab={tab} setTab={setTab} />

      {tab === "gods" && <Gods />}
      {tab === "decor" && <Decor />}
      {tab === "frames" && <Frames />}
    </>
  );
};

export default Home;
