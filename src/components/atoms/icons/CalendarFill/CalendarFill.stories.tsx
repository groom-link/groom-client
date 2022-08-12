import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CalendarFill from './index';

export default {
  title: 'icons/CalendarFill',
  component: CalendarFill
} as ComponentMeta<typeof CalendarFill>;

export const Primary: ComponentStory<typeof CalendarFill> = () => (
  <CalendarFill />
);
