import React, { useEffect, useMemo, memo, useContext, useRef } from "react";
import { ContextStore } from "../context";
import cons from "../constants";
import Chart from "chart.js";
import {
  StyledChartSection,
  MissionResult,
  MissionResultItem,
  ItemTitle,
  ItemContext,
  ChartResultWrapper,
  ChartResultCanvas,
} from "../style/ChartSection";

const ChartSection = ({ currentNavContentId }) => {
  const { missions } = useContext(ContextStore);
  const chartResultRef = useRef(null);

  const totalCompleted = useMemo(() => {
    const filteredMissions = missions.filter((mission) => mission.isCompleted);
    return filteredMissions ? filteredMissions.length : 0;
  }, [missions]);

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
    <StyledChartSection isOpen={currentNavContentId === cons.CHART_SECTION}>
      <MissionResult>
        <MissionResultItem>
          <ItemTitle>Completed</ItemTitle>
          <ItemContext>{totalCompleted}</ItemContext>
        </MissionResultItem>
        <MissionResultItem>
          <ItemTitle>Totally</ItemTitle>
          <ItemContext>{missions.length}</ItemContext>
        </MissionResultItem>
      </MissionResult>
      <ChartResultWrapper>
        <ChartResultCanvas ref={chartResultRef} />
      </ChartResultWrapper>
    </StyledChartSection>
  );
};

export default memo(ChartSection);
