import React, { memo } from "react";
import ListSection from "./ListSection";
import ChartSection from "./ChartSection";
import ConfigSection from "./ConfigSection";

const NavContent = ({ currentNavContentId = null }) => {
  return (
    <div className="nav-content">
      <ListSection currentNavContentId={currentNavContentId} />
      <ChartSection currentNavContentId={currentNavContentId} />
      <ConfigSection currentNavContentId={currentNavContentId} />
    </div>
  );
};

export default memo(NavContent);
