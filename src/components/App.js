import React, {
  useEffect,
  useState,
  useCallback,
  useContext,
  useRef,
} from "react";
import { ContextStore } from "../context";
import Deco from "./deco";
import Header from "./Header";
import AddMission from "./AddMission";
import Clock from "./Clock";
import NavControl from "./NavControl";
import NavContent from "./NavContent";
import cons from "../constants";
window.TIMER = null;

const App = () => {
  const { missions, clockSetting, dispatch } = useContext(ContextStore);
  const [isPlay, setIsPlay] = useState(false);
  const [isBell, setIsBell] = useState(clockSetting.volume);
  const [progress, setIsProgress] = useState(cons.INIT_PROGRESS_VALUE);
  const [time, setTime] = useState(clockSetting.workingTime);
  const [currentMission, setCurrentMission] = useState(missions[0]);
  const progressGapRef = useRef(
    cons.INIT_PROGRESS_VALUE / clockSetting.workingTime
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentNavContentId, setCurrentNavContentId] = useState(null);

  const handleToggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    setCurrentNavContentId(() => (isOpen ? null : cons.LIST_SECTION));
  };

  const handleShowMenu = (navContentId) => {
    setIsOpen(true);
    setCurrentNavContentId(navContentId);
  };

  const handleBtnPlay = useCallback(() => {
    time > 0 &&
      !currentMission.isCompleted &&
      setIsPlay((prevIsPlay) => !prevIsPlay);
  }, [time, currentMission.isCompleted]);

  const handleBtnBell = useCallback(() => {
    time > 0 &&
      !currentMission.isCompleted &&
      setIsBell((prevIsBell) => !prevIsBell);
  }, [time, currentMission.isCompleted]);

  const handleNextMission = useCallback(() => {
    clearInterval(window.TIMER);

    const missionsAmount = missions.length;
    const currentMissionIndex = missions.findIndex(
      (mission) => mission.id === currentMission.id
    );
    const isLastMission = currentMissionIndex === missionsAmount - 1;
    if (isLastMission) {
      alert("You need to Add a New Mission!");
    } else {
      setIsPlay(false);
      setIsBell(clockSetting.volume);
      setIsProgress(cons.INIT_PROGRESS_VALUE);
      setTime(clockSetting.workingTime);
      setCurrentMission(missions[currentMissionIndex + 1]);
    }
  }, [clockSetting, missions, currentMission]);

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
    <div className="app">
      <Deco isOpen={isOpen} />
      <Header isOpen={isOpen} onToggleMenu={handleToggleMenu} />
      <AddMission isOpen={isOpen} />
      <Clock
        isBell={isBell}
        isPlay={isPlay}
        isOpen={isOpen}
        currentMission={currentMission.mission}
        time={time}
        progress={progress}
        onBtnBell={handleBtnBell}
        onBtnPlay={handleBtnPlay}
        onBtnNext={handleNextMission}
      />
      <NavControl
        isOpen={isOpen}
        currentNavContentId={currentNavContentId}
        onShowMenu={handleShowMenu}
      />
      <NavContent currentNavContentId={currentNavContentId} />
    </div>
  );
};

export default App;
