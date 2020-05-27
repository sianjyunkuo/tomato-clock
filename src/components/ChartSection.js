import React, { useEffect, useMemo, memo, useContext, useRef } from "react";
import { ContextStore } from "../context";
import classNames from "classnames";
import cons from "../constants";
import Chart from "chart.js";

const ChartSection = ({ currentNavContentId }) => {
  const { missions } = useContext(ContextStore);
  const chartResultRef = useRef(null);

  const totalCompleted = useMemo(() => {
    const filteredMissions = missions.filter((mission) => mission.isCompleted);
    return filteredMissions ? filteredMissions.length : 0;
  }, [missions]);

  const renderChartSectionClass = useMemo(
    () =>
      classNames({
        "chart-section": true,
        "is-open": currentNavContentId === cons.CHART_SECTION,
      }),
    [currentNavContentId]
  );
  useEffect(() => {
    new Chart(chartResultRef.current, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [totalCompleted, missions.length],
            backgroundColor: ["#ffd5c0", "#ffab82"],
          },
        ],
        labels: ["Completed", "Total"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        elements: {
          borderColor: "red",
        },
      },
    });
  }, [totalCompleted, missions]);
  return (
    <div className={renderChartSectionClass}>
      <div className="mission-result">
        <div className="mission-result-item">
          <p className="item-title">Completed</p>
          <p className="item-context">{totalCompleted}</p>
        </div>
        <div className="mission-result-item">
          <p className="item-title">Totoally</p>
          <p className="item-context">{missions.length}</p>
        </div>
      </div>
      <div className="chart-result-wrapper">
        <canvas ref={chartResultRef} width="500" height="500"></canvas>
      </div>
    </div>
  );
};

export default memo(ChartSection);
