import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  memo,
  useContext,
  useRef,
} from "react";
import { ContextStore } from "../context";
import classNames from "classnames";
import cons from "../constants";
import moment from "moment";

const ListSection = ({ currentNavContentId }) => {
  const { missions, dispatch } = useContext(ContextStore);
  const [newMission, setMission] = useState("");
  const newMissionRef = useRef();
  const todayDateRef = useRef(moment().format("MMM, DD YYYY"));

  useEffect(() => {
    newMissionRef.current = newMission;
  });

  const handleAddMission = useCallback(() => {
    const filteredMission = newMissionRef.current.trim();
    if (filteredMission) {
      dispatch({ type: cons.ADD_MISSION, mission: filteredMission });
      setMission("");
    }
  }, [newMissionRef, dispatch]);

  const renderListSectionClass = useMemo(
    () =>
      classNames({
        "list-section": true,
        "is-open": currentNavContentId === cons.LIST_SECTION,
      }),
    [currentNavContentId]
  );

  return (
    <div className={renderListSectionClass}>
      <div className="add-mission-input-wrapper">
        <input
          className="add-mission-input"
          type="text"
          placeholder="Add a new mission..."
          value={newMission}
          maxLength={35}
          onChange={(e) => {
            setMission(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && handleAddMission();
          }}
        />
        <div className="btn-add-mission" onClick={handleAddMission}></div>
      </div>
      <div className="table-list">
        <div className="table-list-head">{todayDateRef.current}</div>
        <div className="table-list-body">
          {missions.map((mission) => {
            return (
              <div
                key={mission.id}
                className={classNames({
                  "mission-item": true,
                  "is-completed": mission.isCompleted,
                })}
              >
                {mission.mission}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(ListSection);
