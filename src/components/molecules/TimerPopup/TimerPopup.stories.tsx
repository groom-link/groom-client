import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TimerPopup from './index';

export default {
  title: 'molecules/TimerPopup',
  component: TimerPopup
} as ComponentMeta<typeof TimerPopup>;

export const Primary: ComponentStory<typeof TimerPopup> = (props) => {
  const { groupName, timer, type } = props;

  if (type === 'button') {
    const { disabled, onClick } = props;
    return (
      <TimerPopup
        {...{
          groupName: groupName ?? 'SW 개발 모임',
          timer: timer ?? '10:12',
          type,
          disabled,
          onClick
        }}
      />
    );
  }

  return (
    <TimerPopup
      {...{
        groupName: groupName ?? 'SW 개발 모임',
        timer: timer ?? '10:12',
        type
      }}
    />
  );
};
