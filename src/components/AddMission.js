import React, { useState, useCallback, useRef, useEffect, memo } from "react";

const AddMission = () => {
  const [newMission, setMission] = useState("");
  const newMissionRef = useRef();

  useEffect(() => {
    newMissionRef.current = newMission;
  });

  const handleAddMission = useCallback(() => {
    const filteredMission = newMissionRef.current.trim();
    if (filteredMission) {
      console.log("submit new mission", filteredMission);
      setMission("");
    }
  }, [newMissionRef]);

  return (
    <div className="add-mission">
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
