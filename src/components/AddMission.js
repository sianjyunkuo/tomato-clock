import React, { useState, useCallback } from "react";

const AddMission = () => {
  const [newMission, setMission] = useState("");

  const handleAddMission = useCallback(() => {
    const filteredMission = newMission.trim();
    if (filteredMission) {
      console.log("filteredMission", filteredMission);
      setMission("");
    }
  }, [newMission]);

  const onInputChange = useCallback((e) => {
    const value = e.target.value;
    setMission(value);
  }, []);

  const onInputKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleAddMission();
      }
    },
    [handleAddMission]
  );

  return (
    <div className="add-mission">
      <input
        className="add-mission-input"
        type="text"
        placeholder="Add a new mission ..."
        value={newMission}
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
      />
      <div className="btn-add-mission" onClick={handleAddMission}></div>
    </div>
  );
};

export default AddMission;
