import React, { useEffect, useState, useContext, useRef, useMemo } from "react";
import { ContextStore } from "../context";
import Deco from "./Deco";
import Header from "./Header";
import AddMission from "./AddMission";
import Clock from "./Clock";
import cons from "../constants";
window.TIMER = null;

const App = () => {
  const { missions, clockSetting, dispatch } = useContext(ContextStore);
  const [isPlay, setIsPlay] = useState(false);
  const [isBell, setIsBell] = useState(clockSetting.volume);
  const [progress, setIsProgress] = useState(cons.INIT_PROGRESS_VALUE);
  const [time, setTime] = useState(clockSetting.workingTime);
  const [currentMissionId, setCurrentMissionId] = useState(missions[0].id);
  const progressGapRef = useRef(
    Math.floor(cons.INIT_PROGRESS_VALUE / clockSetting.workingTime)
  );

  const handleBtnPlay = () => {
    time > 0 &&
      !currentMission.isCompleted &&
      setIsPlay((prevIsPlay) => !prevIsPlay);
  };

  const handleBtnBell = () => {
    time > 0 &&
      !currentMission.isCompleted &&
      setIsBell((prevIsBell) => !prevIsBell);
  };

  const handleNextMission = () => {
    clearInterval(window.TIMER);

    const missionsAmount = missions.length;
    const currentMissionIndex = missions.findIndex(
      (mission) => mission.id === currentMission.id
    );
    dispatch({
      type: cons.COMPLETE_MISSION,
      missionId: currentMission.id,
    });
    if (currentMissionIndex === missionsAmount - 1) {
      alert("Wonderful! Today The Missions Have Been Completed!");
    } else {
      setIsPlay(false);
      setIsBell(clockSetting.volume);
      setIsProgress(cons.INIT_PROGRESS_VALUE);
      setTime(clockSetting.workingTime);
      setCurrentMissionId(missions[currentMissionIndex + 1].id);
    }
  };

  const currentMission = useMemo(
    () => missions.find((mission) => mission.id === currentMissionId),
    [missions, currentMissionId]
  );

  useEffect(() => {
    if (isPlay) {
      window.TIMER = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        setIsProgress((prevProgress) => prevProgress - progressGapRef.current);
      }, 1 * 1000);
    } else {
      clearInterval(window.TIMER);
    }
  }, [isPlay]);

  useEffect(() => {
    if (time === 0 && isPlay) {
      clearInterval(window.TIMER);
      window.TIMER = null;
      setIsPlay(false);
      dispatch({
        type: cons.COMPLETE_MISSION,
        missionId: currentMission.id,
      });
      isBell && console.log("BELL!");
    }
  }, [time, isBell, isPlay, currentMission, dispatch]);

  return (
    <div className="App">
      <Deco />
      <Header />
      <AddMission />
      <Clock
        isBell={isBell}
        isPlay={isPlay}
        currentMission={currentMission.mission}
        time={time}
        progress={progress}
        onBtnBell={handleBtnBell}
        onBtnPlay={handleBtnPlay}
        onBtnNext={handleNextMission}
      />
    </div>
  );
};

export default App;
