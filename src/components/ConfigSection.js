import React, { useState, useContext, memo, useEffect } from "react";
import { ContextStore } from "../context";
import cons from "../constants";
import styled from "styled-components";
import btnArrowDown from "../images/btn-arrow-down.svg";

const StyledConfigSection = styled.div`
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

const ConfigSetting = styled.div`
  margin-bottom: 108px;
`;

const ConfigTitle = styled.h6`
  font-size: 24px;
  color: #f2f0c9;
  margin: 0 0 15px 0;
`;

const ConfigItem = styled.div`
  position: relative;
  padding: 13px 0 13px 20px;
  display: flex;
`;

const ItemLabel = styled.span`
  font-size: 20px;
  color: #f2f0c9;
`;

const ItemValue = styled.div`
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

const OptionsPanel = styled.div`
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
  transition: all 1s;
`;

const Option = styled.p`
  font-size: 20px;
  color: #f2f0c9;
  margin: 0;
  padding: 10px 20px;
  cursor: pointer;
`;

const ConfigSection = ({ currentNavContentId }) => {
  const { clockSetting, dispatch } = useContext(ContextStore);
  const [isShowWorkingTime, setIsShowWorkingTime] = useState(false);
  const [isShowRestingTime, setIsShowRestingTime] = useState(false);

  useEffect(() => {
    if (currentNavContentId !== cons.CONFIG_SECTION) {
      setIsShowWorkingTime(false);
    }
  }, [currentNavContentId]);

  const handleWorkingTime = (workingTime) => {
    dispatch({ type: cons.UPDATE_WORKING_TIME, workingTime });
    setIsShowWorkingTime(false);
  };

  return (
    <StyledConfigSection isOpen={currentNavContentId === cons.CONFIG_SECTION}>
      <ConfigSetting>
        <ConfigTitle>Time Setting</ConfigTitle>
        <ConfigItem>
          <ItemLabel>Working time</ItemLabel>

          <ItemValue
            isSelected={isShowWorkingTime}
            onClick={() => {
              setIsShowWorkingTime((prevIsShow) => !prevIsShow);
            }}
          >
            {clockSetting.workingTime / 60} min
          </ItemValue>

          <OptionsPanel isShow={isShowWorkingTime}>
            {cons.WORKING_TIME_OPTIONS.map(({ id, workingTime }) => (
              <Option
                key={id}
                isSelected={isShowWorkingTime}
                onClick={() => {
                  handleWorkingTime(workingTime);
                }}
              >
                {workingTime} min
              </Option>
            ))}
          </OptionsPanel>
        </ConfigItem>
        <ConfigItem>
          <ItemLabel>Resting time</ItemLabel>
          <ItemValue
            isSelected={isShowRestingTime}
            onClick={() => {
              setIsShowRestingTime((prevIsShow) => !prevIsShow);
            }}
          >
            5 min
          </ItemValue>
          <OptionsPanel isShow={isShowRestingTime}>
            <Option>3 min</Option>
            <Option>5 min</Option>
            <Option>10 min</Option>
          </OptionsPanel>
        </ConfigItem>
      </ConfigSetting>
      <ConfigSetting>
        <ConfigTitle>Alarm</ConfigTitle>
      </ConfigSetting>
    </StyledConfigSection>
  );
};

export default memo(ConfigSection);
