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

const Clock = ({ initCountdown, currentMission, initIsBell = true } = {}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isBell, setIsBell] = useState(initIsBell);
  const [progress, isProgress] = useState(INIT_PROGRESS_VALUE);
  const [time, setTime] = useState(initCountdown);
  const refProgressGap = useRef(
    Math.floor(INIT_PROGRESS_VALUE / initCountdown)
  );

  useEffect(() => {
    if (isPlay) {
      window.TIMER = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        isProgress((prevProgress) => prevProgress - refProgressGap.current);
      }, 1 * 1000);
    }
  }, [isPlay]);

  useEffect(() => {
    if (!isPlay) {
      clearInterval(window.TIMER);
    }

    if (time === 0) {
      clearInterval(window.TIMER);
      window.TIMER = null;
      setIsPlay(false);
    }
  }, [time, isPlay]);

  const onBtnPlay = useCallback(() => {
    setIsPlay((prevIsPlay) => !prevIsPlay);
  }, []);

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
        "is-unbell": !isBell,
      }),
    [isBell]
  );

  const onBtnBell = useCallback(() => {
    setIsBell((prevIsBell) => !prevIsBell);
  }, []);

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
          <div className="btn-skip"></div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
