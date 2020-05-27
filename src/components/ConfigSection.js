import React, { useMemo, memo } from "react";
import classNames from "classnames";
import cons from "../constants";

const ConfigSection = ({ currentNavContentId }) => {
  const renderConfigSectionClass = useMemo(
    () =>
      classNames({
        "config-section": true,
        "is-open": currentNavContentId === cons.CONFIG_SECTION,
      }),
    [currentNavContentId]
  );

  return <div className={renderConfigSectionClass}>ConfigSection</div>;
};

export default memo(ConfigSection);
