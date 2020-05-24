import { useState, useEffect, useCallback, useRef } from "react";

window.TIMER = null;

export const useClock = ({
  currentMissionId,
  initProgressValue,
  initCountdown,
  initIsBell,
  skipMission,
  finishMission,
}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isBell, setIsBell] = useState(true);
  const [progress, setIsProgress] = useState(null);
  const [time, setTime] = useState(0);
  const progressGapRef = useRef(0);

  const onBtnPlay = useCallback(() => {
    time > 0 && setIsPlay((prevIsPlay) => !prevIsPlay);
  }, [time]);

  const onBtnBell = useCallback(() => {
    setIsBell((prevIsBell) => !prevIsBell);
  }, []);

  const onBtnSkip = useCallback(() => {
    clearInterval(window.TIMER);
    skipMission();
  }, [skipMission]);

  useEffect(() => {
    // init
    if (currentMissionId) {
      setIsBell(initIsBell);
      setIsProgress(initProgressValue);
      setTime(initCountdown);
      progressGapRef.current = Math.floor(initProgressValue / initCountdown);
    }
  }, [currentMissionId, initIsBell, initProgressValue, initCountdown]);

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
      finishMission(isBell);
    }
  }, [time, isBell, isPlay, finishMission]);

  return [isPlay, isBell, progress, time, onBtnPlay, onBtnBell, onBtnSkip];
};
