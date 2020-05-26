import { useState, useEffect, useCallback, useRef } from "react";

window.TIMER = null;

export const useClock = ({}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isBell, setIsBell] = useState(true);
  const [time, setTime] = useState(0);

  const onBtnPlay = () => {
    time > 0 && setIsPlay((prevIsPlay) => !prevIsPlay);
  };

  const onBtnBell = () => {
    setIsBell((prevIsBell) => !prevIsBell);
  };

  return [isPlay, isBell, progress, time, onBtnPlay, onBtnBell];
};
