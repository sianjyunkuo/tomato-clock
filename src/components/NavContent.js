import React, { useMemo, memo } from "react";
import classNames from "classnames";
import cons from "../constants";

const NavContent = ({ currentNavContentId = null }) => {
  const renderListSectionClass = useMemo(
    () =>
      classNames({
        "list-section": true,
        "is-open": currentNavContentId === cons.LIST_SECTION,
      }),
    [currentNavContentId]
  );

  const renderChartSectionClass = useMemo(
    () =>
      classNames({
        "chart-section": true,
        "is-open": currentNavContentId === cons.CHART_SECTION,
      }),
    [currentNavContentId]
  );

  const renderConfigSectionClass = useMemo(
    () =>
      classNames({
        "config-section": true,
        "is-open": currentNavContentId === cons.CONFIG_SECTION,
      }),
    [currentNavContentId]
  );

  return (
    <div className="nav-content">
      <div className={renderListSectionClass}>List Section</div>
      <div className={renderChartSectionClass}>Chart Section</div>
      <div className={renderConfigSectionClass}>Config Section</div>
    </div>
  );
};

export default memo(NavContent);
