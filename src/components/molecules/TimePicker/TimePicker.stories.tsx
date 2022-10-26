import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UseDatetimePicker } from '../../../hooks';
import TimerPicker from './index';

export default {
  title: 'molecules/TimerPicker',
  component: TimerPicker
} as ComponentMeta<typeof TimerPicker>;

export const Primary: ComponentStory<typeof TimerPicker> = ({
  allDayOption
}) => {
  const {
    startDatetime,
    endDatetime,
    handleChangeEndDatetime,
    handleChangeStartDatetime,
    isToggleOn,
    handleClickToggle
  } = UseDatetimePicker();

  return (
    <TimerPicker
      allDayOption={allDayOption}
      onClickToggle={handleClickToggle}
      onChangeStartDatetime={handleChangeStartDatetime}
      onChangeEndDatetime={handleChangeEndDatetime}
      {...{ isToggleOn, startDatetime, endDatetime }}
    />
  );
};
