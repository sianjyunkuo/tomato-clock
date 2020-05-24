import React, { useState, useMemo, useCallback, useRef } from "react";
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
  // const [list, setList] = useState(INIT_LIST);
  const listRef = useRef(INIT_LIST);
  const [clockSetting, setClockSetting] = useState(INIT_CLOCK_SETTING);
  const [currentMissionId, setCurrentMissionId] = useState(
    INIT_CURRENT_MISSION_ID
  );

  const currentMission = useMemo(() => {
    return listRef.current.find((item) => item.id === currentMissionId);
  }, [currentMissionId]);

  const handleFinishMission = useCallback(
    (isBell) => {
      const newList = listRef.current.map((item) => {
        if (item.id === currentMissionId) {
          item.isFinished = true;
        }
        return item;
      });
      listRef.current = newList;

      if (isBell) console.log("isBell! is Bell!");
    },
    [currentMissionId]
  );

  const handleSkipMission = useCallback(() => {
    const nextMissionId = currentMissionId + 1;
    const mission = listRef.current.find((item) => item.id === nextMissionId);

    if (mission) {
      setCurrentMissionId((prevMissionId) => prevMissionId + 1);
    } else {
      alert("Wonderful! Today The Missions Have Been Completed!");
    }
  }, [currentMissionId]);

  return (
    <div className="App">
      <Deco />
      <Header />
      <AddMission />
      {currentMission && (
        <Clock
          initCountdown={clockSetting.workingTime}
          currentMission={currentMission}
          initIsBell={clockSetting.volume}
          finishMission={handleFinishMission}
          skipMission={handleSkipMission}
        />
      )}
    </div>
  );
};

export default App;
