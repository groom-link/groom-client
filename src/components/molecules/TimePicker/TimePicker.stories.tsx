import React, { ChangeEvent, useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TimerPicker from './index';

export default {
  title: 'molecules/TimerPicker',
  component: TimerPicker
} as ComponentMeta<typeof TimerPicker>;

export const Primary: ComponentStory<typeof TimerPicker> = ({
  allDayOption
}) => {
  const tzoffset = new Date().getTimezoneOffset() * 60000;
  const ISOString = new Date(Date.now() - tzoffset).toISOString();
  const todayDatetime = ISOString.slice(0, 16);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [startDatetime, setStartDatetime] = useState(todayDatetime);
  const [endDatetime, setEndDatetime] = useState(todayDatetime);

  useEffect(() => {
    if (isToggleOn) {
      setStartDatetime((pre) => pre.slice(0, 10));
      setEndDatetime((pre) => pre.slice(0, 10));
      return;
    }
    if (startDatetime.length <= 10) setStartDatetime((pre) => pre + 'T00:00');
    if (endDatetime.length <= 10) setEndDatetime((pre) => pre + 'T00:00');
    // useEffect 내에서 startDatetime과 endDatetime을 사용하고 있지만 이 effect는 오직 isToggleOn에 의해서만 실행되어야 합니다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isToggleOn]);

  const handleClickToggle = () => setIsToggleOn((pre) => !pre);

  const handleChangeDatetime = (
    { target: { value } }: ChangeEvent<HTMLInputElement>,
    target: 'start' | 'end'
  ) => {
    if (target === 'start') {
      setStartDatetime(value);
      return;
    }
    setEndDatetime(value);
  };

  return (
    <TimerPicker
      allDayOption={allDayOption}
      onClickToggle={handleClickToggle}
      onChangeStartDatetime={(event) => handleChangeDatetime(event, 'start')}
      onChangeEndDatetime={(event) => handleChangeDatetime(event, 'end')}
      {...{ isToggleOn, startDatetime, endDatetime }}
    />
  );
};
