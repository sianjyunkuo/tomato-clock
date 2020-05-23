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
        countdown={25 * 60}
        currentMission="Clean up the desk"
        isBell={true}
      />
    </div>
  );
};

export default App;
