import React, { memo, useMemo } from "react";
import classNames from "classnames";
import cons from "../constants";

const NavControl = ({ isOpen = false, currentNavContentId, onShowMenu }) => {
  const handleNavBtn = (navContentId) => {
    onShowMenu(navContentId);
  };

  const renderNavControlClass = useMemo(
    () =>
      classNames({
        "nav-control": true,
        "is-open": isOpen,
      }),
    [isOpen]
  );

  const renderBtnListClass = useMemo(
    () =>
      classNames({
        "btn-list": true,
        "is-current": currentNavContentId === cons.LIST_SECTION,
      }),
    [currentNavContentId]
  );

  const renderBtnChartClass = useMemo(
    () =>
      classNames({
        "btn-chart": true,
        "is-current": currentNavContentId === cons.CHART_SECTION,
      }),
    [currentNavContentId]
  );

  const renderBtnConfigClass = useMemo(
    () =>
      classNames({
        "btn-config": true,
        "is-current": currentNavContentId === cons.CONFIG_SECTION,
      }),
    [currentNavContentId]
  );

  return (
    <nav className={renderNavControlClass}>
      <div
        className={renderBtnListClass}
        onClick={() => handleNavBtn(cons.LIST_SECTION)}
      ></div>
      <div
        className={renderBtnChartClass}
        onClick={() => handleNavBtn(cons.CHART_SECTION)}
      ></div>
      <div
        className={renderBtnConfigClass}
        onClick={() => handleNavBtn(cons.CONFIG_SECTION)}
      ></div>
    </nav>
  );
};

export default memo(NavControl);
