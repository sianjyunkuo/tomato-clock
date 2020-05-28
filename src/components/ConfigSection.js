import React, {
  useState,
  useContext,
  memo,
  useEffect,
  useCallback,
} from "react";
import { ContextStore } from "../context";
import cons from "../constants";
import {
  StyledConfigSection,
  ConfigSetting,
  ConfigTitle,
  ConfigItem,
  ItemLabel,
  ItemSelectValue,
  OptionsPanel,
  Option,
  ItemRadioValue,
} from "../style/ConfigSection";

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
