import { uuid } from "../helpers";
import cons from "../constants";

export const missionsReducer = (state, action) => {
  switch (action.type) {
    case cons.COMPLETE_MISSION: {
      const newMissions = state.missions.map((mission) => {
        if (mission.id === action.missionId) {
          return { ...mission, isCompleted: true };
        }
        return mission;
      });
      return { ...state, missions: newMissions };
    }

    case cons.ADD_MISSION: {
      const newMission = {
        id: uuid(),
        mission: action.mission,
        isCompleted: false,
      };
      const newMissions = state.missions.concat(newMission);

      return { ...state, missions: newMissions };
    }

    default:
      return state;
  }
};

export const clockSettingReducer = (state, action) => {
  switch (action.type) {
    case cons.UPDATE_WORKING_TIME: {
      const newClockSetting = {
        ...state.clockSetting,
        workingTime: action.workingTime * 60,
      };
      return { ...state, clockSetting: newClockSetting };
    }
    case cons.UPDATE_RESTING_TIME: {
      const newClockSetting = {
        ...state.clockSetting,
        restingTime: action.restingTime * 60,
      };
      return { ...state, clockSetting: newClockSetting };
    }

    case cons.UPDATE_VOLUME: {
      return state;
    }

    case cons.UPDATE_AUDIO: {
      const newClockSetting = { ...state.clockSetting, audio: action.audio };
      return { ...state, clockSetting: newClockSetting };
    }

    default:
      return state;
  }
};
