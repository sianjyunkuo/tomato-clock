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
    case "TEST_CLOCK_SETTING":
      console.log("TEST_CLOCK_SETTING");
      return state;
    default:
      return state;
  }
};
