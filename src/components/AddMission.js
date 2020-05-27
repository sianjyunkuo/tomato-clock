import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useContext,
  useMemo,
  memo,
} from "react";
import { ContextStore } from "../context";
import cons from "../constants";
import classNames from "classnames";

const AddMission = ({ isOpen = false }) => {
  const { dispatch } = useContext(ContextStore);
  const [newMission, setMission] = useState("");
  const newMissionRef = useRef();

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

  const renderAddMissionClass = useMemo(
    () =>
      classNames({
        "add-mission": true,
        "is-open": isOpen,
      }),
    [isOpen]
  );

  return (
    <div className={renderAddMissionClass}>
      <input
        className="add-mission-input"
        type="text"
        placeholder="Add a new mission ..."
        value={newMission}
        onChange={(e) => {
          setMission(e.target.value);
        }}
        onKeyDown={(e) => {
          e.key === "Enter" && handleAddMission();
        }}
      />
      <div className="btn-add-mission" onClick={handleAddMission}></div>
    </div>
  );
};

export default memo(AddMission);
