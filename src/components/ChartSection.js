import React, { useMemo, memo } from "react";
import classNames from "classnames";
import cons from "../constants";

const ChartSection = ({ currentNavContentId }) => {
  const renderChartSectionClass = useMemo(
    () =>
      classNames({
        "chart-section": true,
        "is-open": currentNavContentId === cons.CHART_SECTION,
      }),
    [currentNavContentId]
  );
  return <div className={renderChartSectionClass}>ChartSection</div>;
};

export default memo(ChartSection);
