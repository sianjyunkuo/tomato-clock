import React, { memo } from "react";
import { Deco1, Deco2, Deco3, Deco4 } from "../style/Deco";

const Deco = ({ isOpen }) => {
  return (
    <>
      <Deco1 />
      <Deco2 />
      <Deco3 />
      <Deco4 isOpen={isOpen} />
    </>
  );
};

export default memo(Deco);
