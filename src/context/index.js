import React, { useReducer } from "react";
import { uuid } from "../helpers";
import { missionsReducer, clockSettingReducer } from "../reducers";

const initMissionsState = {
  missions: [
    {
      id: uuid(),
      mission: "Call to Mom",
      isCompleted: false,
    },
    {
      id: uuid(),
      mission: "Feed the dog",
      isCompleted: false,
    },
    {
      id: uuid(),
      mission: "Sleep Early",
      isCompleted: false,
    },
  ],
};

const initClockSettingState = {
  clockSetting: {
    workingTime: 5 * 60,
    restingTime: 5 * 60,
    volume: true,
    audio: "basic",
  },
};

function combineDispatchs(dispatchs) {
  return function (obj) {
    return dispatchs.map((dispatch) => dispatch(obj));
  };
}

export const ContextStore = React.createContext(null);

export const ContextProvider = ({ children }) => {
  const [missionsState, missionsDispatch] = useReducer(
    missionsReducer,
    initMissionsState
  );
  const [clockSettingState, clockSettingDispatch] = useReducer(
    clockSettingReducer,
    initClockSettingState
  );

  return (
    <ContextStore.Provider
      value={{
        missions: missionsState.missions,
        clockSetting: clockSettingState.clockSetting,
        dispatch: combineDispatchs([missionsDispatch, clockSettingDispatch]),
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};
