import React, { useState, useCallback, useMemo } from "react";
import classNames from "classnames";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const handleToggleHamburger = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

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
      <div className={renderHamburgerClass} onClick={handleToggleHamburger}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default Header;
