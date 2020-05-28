import React, {
  useState,
  useContext,
  memo,
  useEffect,
  useCallback,
} from "react";
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

const ItemSelectValue = styled.div`
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
`;
const ItemRadioValue = styled.div`
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
  const [isShowAudio, setIsShowAudio] = useState(false);
  useEffect(() => {
    if (currentNavContentId !== cons.CONFIG_SECTION) {
      setIsShowWorkingTime(false);
      setIsShowRestingTime(false);
      setIsShowAudio(false);
    }
  }, [currentNavContentId]);

  const handleWorkingTime = useCallback(
    (workingTime) => {
      dispatch({
        type: cons.UPDATE_WORKING_TIME,
        workingTime,
      });
      setIsShowWorkingTime(false);
    },
    [dispatch]
  );

  const handleRestingTime = useCallback(
    (restingTime) => {
      dispatch({ type: cons.UPDATE_RESTING_TIME, restingTime });
      setIsShowRestingTime(false);
    },
    [dispatch]
  );

  const handleAudio = useCallback(
    (audio) => {
      dispatch({ type: cons.UPDATE_AUDIO, audio });
      setIsShowAudio(false);
    },
    [dispatch]
  );

  return (
    <StyledConfigSection isOpen={currentNavContentId === cons.CONFIG_SECTION}>
      <ConfigSetting>
        <ConfigTitle>Time Setting</ConfigTitle>
        <ConfigItem>
          <ItemLabel>Working time</ItemLabel>

          <ItemSelectValue
            isSelected={isShowWorkingTime}
            onClick={() => {
              setIsShowWorkingTime((prevIsShow) => !prevIsShow);
            }}
          >
            {clockSetting.workingTime / 60} min
          </ItemSelectValue>

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
          <ItemSelectValue
            isSelected={isShowRestingTime}
            onClick={() => {
              setIsShowRestingTime((prevIsShow) => !prevIsShow);
            }}
          >
            {clockSetting.restingTime / 60} min
          </ItemSelectValue>
          <OptionsPanel isShow={isShowRestingTime}>
            {cons.RESTING_TIME_OPTIONS.map(({ id, restingTime }) => (
              <Option
                key={id}
                isSelected={isShowRestingTime}
                onClick={() => {
                  handleRestingTime(restingTime);
                }}
              >
                {restingTime} min
              </Option>
            ))}
          </OptionsPanel>
        </ConfigItem>
      </ConfigSetting>
      <ConfigSetting>
        <ConfigTitle>Alarm</ConfigTitle>
        <ConfigItem>
          <ItemLabel>Volume</ItemLabel>
          <ItemRadioValue
            isOn={clockSetting.volume}
            onClick={() => {
              dispatch({
                type: cons.UPDATE_VOLUME,
                volume: !clockSetting.volume,
              });
            }}
          ></ItemRadioValue>
        </ConfigItem>
        <ConfigItem>
          <ItemLabel>Audio</ItemLabel>
          <ItemSelectValue
            isSelected={isShowAudio}
            onClick={() => {
              setIsShowAudio((prevIsShow) => !prevIsShow);
            }}
          >
            {clockSetting.audio}
          </ItemSelectValue>
          <OptionsPanel isShow={isShowAudio}>
            {cons.AUDIO_OPTIONS.map(({ id, audio }) => (
              <Option
                key={id}
                isSelected={isShowAudio}
                onClick={() => {
                  handleAudio(audio);
                }}
              >
                {audio}
              </Option>
            ))}
          </OptionsPanel>
        </ConfigItem>
      </ConfigSetting>
    </StyledConfigSection>
  );
};

export default memo(ConfigSection);
