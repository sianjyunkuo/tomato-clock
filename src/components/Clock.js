import React, { useMemo, memo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Clock = ({
  isBell,
  isPlay,
  currentMission,
  time = 0,
  progress,
  onBtnBell,
  onBtnPlay,
  onBtnNext,
}) => {
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

  const renderProgressStyle = useMemo(() => `${progress}px`, [progress]);

  const renderTime = useMemo(() => {
    const minute = Math.floor(time / 60).toString();
    const second = (time % 60).toString();
    let filteredMinute = minute;
    let filteredSecond = second;

    if (minute.length === 1 || minute.length === 0) {
      filteredMinute = `0${minute}`;
    }

    if (second.length === 1) {
      filteredSecond = `0${second}`;
    }

    return `${filteredMinute}:${filteredSecond}`;
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
          <div className="btn-next" onClick={onBtnNext}></div>
        </div>
      </div>
    </div>
  );
};

Clock.propTypes = {
  isBell: PropTypes.bool.isRequired,
  isPlay: PropTypes.bool.isRequired,
  currentMission: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onBtnBell: PropTypes.func.isRequired,
  onBtnPlay: PropTypes.func.isRequired,
  onBtnNext: PropTypes.func.isRequired,
};

export default memo(Clock);
