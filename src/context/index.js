import React from "react";

export const ContextStore = React.createContext({
  products: [],
  orders: [],
  missions: [],
  clockSetting: {},
});
