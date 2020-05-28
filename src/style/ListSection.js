import styled from "styled-components";
import imageIconCalendar from "../images/icon-calendar.svg";
import imageCheckboxDefault from "../images/checkbox-default.svg";
import imageCheckboxChecked from "../images/checkbox-checked.svg";

export const StyledListSection = styled.div`
  position: absolute;
  top: 170px;
  right: 50px;
  width: 604px;
  height: 700px;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(680px)"};
  transition: transform 1s;
`;

export const AddMissionInputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const AddMissionInput = styled.input.attrs({
  type: "text",
  placeholder: "Add a new mission...",
  maxLength: 35,
})`
  width: 100%;
  font-size: 24px;
  letter-spacing: 0.1em;
  color: #bc2b35;
  background-color: #f2f0c9;
  border-radius: 6px;
  border: none;
  padding: 5px 15px;
  box-sizing: border-box;
  outline: none;
  &::-webkit-input-placeholder {
    color: #bc2b35;
    opacity: 0.55;
    font-size: 22px;
    letter-spacing: 2px;
  }
`;

export const BtnAddMission = styled.div`
  position: absolute;
  top: 10px;
  right: 19px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #bc2a35;
    width: 100%;
    height: 2px;
  }
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #bc2a35;
    width: 2px;
    height: 100%;
  }
`;

export const TableList = styled.div``;

export const TableListHead = styled.div`
  position: relative;
  font-size: 24px;
  color: #f2f0c9;
  text-align: center;
  padding: 5px 15px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #e9414c;
  &:before {
    position: absolute;
    left: 27px;
    top: 8px;
    content: "";
    width: 27px;
    height: 24px;
    background-size: 100%;
    background-image: url(${imageIconCalendar});
  }
`;

export const TableListBody = styled.div`
  background-color: #bc2b35;
  padding: 36px 27px 55px;
  max-height: 523px;
  overflow-y: auto;
`;

export const MissionItem = styled.div`
  position: relative;
  color: #f2f0c9;
  font-size: 20px;
  padding: 15px 0 15px 45px;
  opacity: ${(props) => (props.isCompleted ? 1 : 0.6)};
  transition: ${(props) => (props.isCompleted ? "opacity 1s" : "none")};
  &:before {
    position: absolute;
    top: 16px;
    left: 0;
    content: "";
    width: 28px;
    height: 28px;
    background-size: 100%;
    background-image: url(${(props) =>
      props.isCompleted ? imageCheckboxChecked : imageCheckboxDefault});
  }
  &:after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: "";
    width: 92%;
    height: 1px;
    border-bottom: 1px dashed rgba(242, 240, 201, 0.5);
  }
`;
