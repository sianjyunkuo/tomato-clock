import React, { useReducer } from "react";
import { ContextStore } from "./context";
import { missionsReducer, clockSettingReducer } from "./reducers";
import App from "./components/App";
import { uuid } from "./helpers";

const initMissionsState = {
  missions: [
    {
      id: uuid(),
      mission: "call to Mom",
      isCompleted: false,
    },
    {
      id: uuid(),
      mission: "sleep early",
      isCompleted: false,
    },
    {
      id: uuid(),
      mission: "Walk the dog",
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

export const Application = () => {
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
      <App />
    </ContextStore.Provider>
  );
};
