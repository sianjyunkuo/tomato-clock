import React, { useCallback, useEffect, useState, useMemo } from "react";

const Clock = ({ countdown, currentMission, isBell }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [time, setTime] = useState(countdown);

  useEffect(() => {
    if (isPlay) {
      // const timer = setInterval(() => {
      //     console.log(1)
      //     setTime(prevTime => prevTime - 1)
      // }, 1 * 1000)
    }
  }, [isPlay, countdown, time]);

  const onBtnPlay = useCallback(() => {
    setIsPlay((prevIsPlay) => !prevIsPlay);
  }, []);

  const renderTime = useMemo(() => {
    console.log("time", time);

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

    console.log("finishedMinute", finishedMinute);
    console.log("finishedSecond", finishedSecond);

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
          <div className="btn-bell"></div>
          <div className="btn-play" onClick={onBtnPlay}></div>
          <div className="btn-skip"></div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
