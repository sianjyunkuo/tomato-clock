import React, { useMemo, memo } from "react";
import classNames from "classnames";

const Header = ({ isOpen = false, onToggleMenu }) => {
  const renderHamburgerClass = useMemo(
    () => classNames({ hamburger: true, "is-open": isOpen }),
    [isOpen]
  );
  return (
    <div className="header-section">
      <div className="logo-item">
        <div className="logo"></div>
        <div className="slogan"></div>
      </div>
      <div className={renderHamburgerClass} onClick={onToggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default memo(Header);
