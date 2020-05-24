import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";
import classNames from "classnames";

window.TIMER = null;
const INIT_PROGRESS_VALUE = 1974;

const Clock = ({
  initCountdown,
  currentMission,
  initIsBell = true,
  handleFinishMission,
  handleSkipMission,
} = {}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isBell, setIsBell] = useState(true);
  const [progress, setIsProgress] = useState(INIT_PROGRESS_VALUE);
  const [time, setTime] = useState(0);

  const progressGapRef = useRef(
    Math.floor(INIT_PROGRESS_VALUE / initCountdown)
  );
  useEffect(() => {
    setIsBell(initIsBell);
    setIsProgress(INIT_PROGRESS_VALUE);
    setTime(initCountdown);
    progressGapRef.current = Math.floor(INIT_PROGRESS_VALUE / initCountdown);
  }, [currentMission]);

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
    if (time === 0) {
      clearInterval(window.TIMER);
      window.TIMER = null;
      setIsPlay(false);
      handleFinishMission();
      bell();
    }
  }, [time]);

  const renderBtnPlayClass = useMemo(
    () =>
      classNames({
        "btn-play": true,
        "is-pause": isPlay,
      }),
    [isPlay]
  );

  const renderBtnBellClass = useMemo(
    () =>
      classNames({
        "btn-play": true,
        "is-off-bell": !isBell,
      }),
    [isBell]
  );

  const onBtnPlay = useCallback(() => {
    time > 0 && setIsPlay((prevIsPlay) => !prevIsPlay);
  }, [time]);

  const onBtnBell = useCallback(() => {
    setIsBell((prevIsBell) => !prevIsBell);
  }, []);

  const onBtnSkip = useCallback(() => {
    clearInterval(window.TIMER);
    handleSkipMission();
  }, [handleSkipMission]);

  const bell = useCallback(() => {
    if (isBell && time === 0) {
      console.log("isBell! isBell!");
    }
  }, [isBell, time]);

  const renderProgressStyle = useMemo(() => `${progress}px`, [progress]);

  const renderTime = useMemo(() => {
    const minute = Math.floor(time / 60).toString();
    const second = (time % 60).toString();
    let finishedMinute = minute;
    let finishedSecond = second;

    if (minute.length === 1 || minute.length === 0) {
      finishedMinute = `0${minute}`;
    }

    if (second.length === 1) {
      finishedSecond = `0${second}`;
    }

    return `${finishedMinute}:${finishedSecond}`;
  }, [time]);

  return (
    <div className="clock">
      <div className="clock-container">
        <svg
          className="clock-cycle-base"
          x="0px"
          y="0px"
          width="637px"
          height="637px"
          viewBox="0 0 637 637"
        >
          <circle
            className="clock-cycle-upper-layer"
            cx="318.5"
            cy="318.5"
            r="315"
            style={{ strokeDashoffset: renderProgressStyle }}
          ></circle>
          <circle
            className="clock-cycle-lower-layer"
            cx="318.5"
            cy="318.5"
            r="315"
          ></circle>
        </svg>
        <h1 className="current-mission">{currentMission}</h1>
        <div className="control-bar">
          <div className={renderBtnBellClass} onClick={onBtnBell}></div>
          <div className={renderBtnPlayClass} onClick={onBtnPlay}></div>
          <div className="btn-skip" onClick={onBtnSkip}></div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
