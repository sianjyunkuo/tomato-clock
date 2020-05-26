import React, { useState, useMemo, memo } from "react";
import classNames from "classnames";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const renderHamburgerClass = useMemo(
    () => classNames({ hamburger: true, "is-show": isShow }),
    [isShow]
  );
  return (
    <div className="header-section">
      <div className="logo-item">
        <div className="logo"></div>
        <div className="slogan"></div>
      </div>
      <div
        className={renderHamburgerClass}
        onClick={() => {
          setIsShow((prevIsShow) => !prevIsShow);
        }}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default memo(Header);
