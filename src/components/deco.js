import React, { useMemo, memo } from "react";
import classNames from "classnames";

const Deco = ({ isOpen }) => {
  const renderDeco4Class = useMemo(
    () =>
      classNames({
        deco4: true,
        "is-open": isOpen,
      }),
    [isOpen]
  );

  return (
    <>
      <div className="deco1"></div>
      <div className="deco2"></div>
      <div className="deco3"></div>
      <div className={renderDeco4Class}></div>
    </>
  );
};

export default memo(Deco);
