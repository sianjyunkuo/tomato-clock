import React from "react";
import Header from "./Header";
import Deco from "./deco";
import AddMission from "./AddMission";

const App = () => {
  return (
    <div className="App">
      <Deco />
      <Header />
      <AddMission />
    </div>
  );
};

export default App;
