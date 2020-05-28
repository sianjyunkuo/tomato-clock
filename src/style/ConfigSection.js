import styled from "styled-components";
import btnArrowDown from "../images/btn-arrow-down.svg";

export const StyledConfigSection = styled.div`
  position: absolute;
  top: 170px;
  right: 50px;
  width: 604px;
  height: 700px;
  padding: 80px 65px;
  box-sizing: border-box;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(680px)"};
  transition: all 1s;
`;

export const ConfigSetting = styled.div`
  margin-bottom: 108px;
`;

export const ConfigTitle = styled.h6`
  font-size: 24px;
  color: #f2f0c9;
  margin: 0 0 15px 0;
`;

export const ConfigItem = styled.div`
  position: relative;
  padding: 13px 0 13px 20px;
  display: flex;
`;

export const ItemLabel = styled.span`
  font-size: 20px;
  color: #f2f0c9;
`;

export const ItemSelectValue = styled.div`
  position: absolute;
  right: 12px;
  top: 16px;
  font-size: 20px;
  color: #f2f0c9;
  padding-right: 36px;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 8px;
    width: 21px;
    height: 10px;
    transform: ${(props) =>
      props.isSelected ? "rotate(90deg)" : "rotate(0deg)"};
    transition: transform 0.3s;
    background-size: 100%;
    background-image: url(${btnArrowDown});
  }
`;

export const ItemRadioValue = styled.div`
  position: absolute;
  right: 12px;
  top: 16px;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
  background-color: #f2f0c9;
  &::before {
    content: ${(props) => `"${props.isOn ? "on" : "off"}"`};
    position: absolute;
    left: ${(props) => (props.isOn ? "38px" : "10px")};
    top: 4px;
    line-height: 1;
    letter-spacing: 2px;
    font-size: 20px;
    color: ${(props) => (props.isOn ? "#bc2b35" : "#c1c0a0")};
  }
  &::after {
    position: absolute;
    left: ${(props) => (props.isOn ? "5px" : "50px")};
    top: 3px;
    content: "";
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: all 0.6s;
    background-color: #d9343f;
  }
`;

export const OptionsPanel = styled.div`
  position: absolute;
  right: 11px;
  top: 58px;
  background-color: #bc2b35;
  border-radius: 8px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  text-align: right;
  z-index: 2;
  opacity: ${(props) => (props.isShow ? 1 : 0)};
  visibility: ${(props) => (props.isShow ? "visible" : "hidden")};
  max-height: ${(props) => (props.isShow ? "initial" : 0)};
`;

export const Option = styled.p`
  font-size: 20px;
  color: #f2f0c9;
  margin: 0;
  padding: 10px 20px;
  cursor: pointer;
`;
