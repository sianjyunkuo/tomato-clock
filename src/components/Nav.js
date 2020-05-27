import React, { memo, useMemo } from "react";
import classNames from "classnames";

const Nav = ({ isOpen = false }) => {
  const renderNavClass = useMemo(
    () =>
      classNames({
        nav: true,
        "is-open": isOpen,
      }),
    [isOpen]
  );

  return (
    <nav className={renderNavClass}>
      <div className="nav-list"></div>
      <div className="nav-chart"></div>
      <div className="nav-config"></div>
    </nav>
  );
};

export default memo(Nav);
