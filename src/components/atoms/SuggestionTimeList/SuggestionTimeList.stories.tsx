import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SuggestionTimeList from './index';

export default {
  title: 'atoms/SuggestionTimeList',
  component: SuggestionTimeList
} as ComponentMeta<typeof SuggestionTimeList>;

export const Primary: ComponentStory<typeof SuggestionTimeList> = ({
  date = '2022.09.01 (목)',
  time = '오전 10:00 ~ 오후 11:00'
}) => <SuggestionTimeList {...{ date, time }} />;
