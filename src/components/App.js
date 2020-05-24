import React, { useState, useMemo, useCallback } from "react";
import Header from "./Header";
import Deco from "./Deco";
import AddMission from "./AddMission";
import Clock from "./Clock";
import {
  INIT_LIST,
  INIT_CLOCK_SETTING,
  INIT_CURRENT_MISSION_ID,
} from "../data";

const App = () => {
  const [list, setList] = useState(INIT_LIST);
  const [clockSetting, setClockSetting] = useState(INIT_CLOCK_SETTING);
  const [currentMissionId, setCurrentMissionId] = useState(
    INIT_CURRENT_MISSION_ID
  );

  const currentMission = useMemo(() => {
    return list.find((item) => item.id === currentMissionId);
  }, [list, currentMissionId]);

  const handleFinishMission = useCallback(() => {
    const newList = list.map((item) => {
      if (item.id === currentMissionId) {
        item.isFinished = true;
      }
      return item;
    });
    setList(newList);
  }, [list, currentMissionId]);

  const handleSkipMission = useCallback(() => {
    const nextMissionId = currentMissionId + 1;
    const mission = list.find((item) => item.id === nextMissionId);

    if (mission) {
      setCurrentMissionId((prevMissionId) => prevMissionId + 1);
    } else {
      alert("Wonderful! Today The Missions Have Been Completed!");
    }
  }, [currentMissionId, list]);

  return (
    <div className="App">
      <Deco />
      <Header />
      <AddMission />
      {currentMission && (
        <Clock
          initCountdown={clockSetting.workingTime}
          currentMission={currentMission.mission}
          initIsBell={clockSetting.volume}
          handleFinishMission={handleFinishMission}
          handleSkipMission={handleSkipMission}
        />
      )}
    </div>
  );
};

export default App;
