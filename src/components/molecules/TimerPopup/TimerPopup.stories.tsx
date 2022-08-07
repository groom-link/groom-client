import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TimerPopup from './index';

export default {
  title: 'molecules/TimerPopup',
  component: TimerPopup
} as ComponentMeta<typeof TimerPopup>;

export const Primary: ComponentStory<typeof TimerPopup> = ({
  groupName = '모임 이름',
  timer = '03:30'
}) => <TimerPopup {...{ groupName, timer }} />;
