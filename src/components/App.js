import React from "react";
import Header from "./Header";
import Deco from "./Deco";
import AddMission from "./AddMission";
import Clock from "./Clock";

const App = () => {
  return (
    <div className="App">
      <Deco />
      <Header />
      <AddMission />
      <Clock
        InitCountdown={10}
        currentMission="Clean up the desk"
        initIsBell={true}
      />
    </div>
  );
};

export default App;
