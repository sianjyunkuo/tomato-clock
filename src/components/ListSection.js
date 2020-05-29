import React, {
  useEffect,
  useState,
  useCallback,
  memo,
  useContext,
  useRef,
} from "react";
import { ContextStore } from "../context";
import cons from "../constants";
import moment from "moment";
import {
  StyledListSection,
  AddMissionInputWrapper,
  AddMissionInput,
  BtnAddMission,
  TableList,
  TableListHead,
  TableListBody,
  MissionItem,
} from "../style/ListSection";

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

  return (
    <StyledListSection isOpen={currentNavContentId === cons.LIST_SECTION}>
      <AddMissionInputWrapper>
        <AddMissionInput
          value={newMission}
          onChange={(e) => {
            setMission(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && handleAddMission();
          }}
        />
        <BtnAddMission onClick={handleAddMission} />
      </AddMissionInputWrapper>

      <TableList>
        <TableListHead>{todayDateRef.current}</TableListHead>
        <TableListBody>
          {missions.map((mission) => (
            <MissionItem key={mission.id} iscompleted={mission.iscompleted}>
              {mission.mission}
            </MissionItem>
          ))}
        </TableListBody>
      </TableList>
    </StyledListSection>
  );
};

export default memo(ListSection);
