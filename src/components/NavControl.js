import React, { memo } from "react";
import cons from "../constants";
import {
  StyledNavControl,
  BtnList,
  BtnChart,
  BtnConfig,
} from "../style/NavControl";

const NavControl = ({ isOpen = false, currentNavContentId, onShowMenu }) => {
  const handleNavBtn = (navContentId) => {
    onShowMenu(navContentId);
  };
  return (
    <StyledNavControl isOpen={isOpen}>
      <BtnList
        isCurrent={currentNavContentId === cons.LIST_SECTION}
        onClick={() => handleNavBtn(cons.LIST_SECTION)}
      />
      <BtnChart
        isCurrent={currentNavContentId === cons.CHART_SECTION}
        onClick={() => handleNavBtn(cons.CHART_SECTION)}
      />
      <BtnConfig
        isCurrent={currentNavContentId === cons.CONFIG_SECTION}
        onClick={() => handleNavBtn(cons.CONFIG_SECTION)}
      />
    </StyledNavControl>
  );
};

export default memo(NavControl);
