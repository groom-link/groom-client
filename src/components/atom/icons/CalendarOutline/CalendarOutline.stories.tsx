import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CalendarOutline from './index';

export default {
  title: 'icons/CalendarOutline',
  component: CalendarOutline
} as ComponentMeta<typeof CalendarOutline>;

export const Primary: ComponentStory<typeof CalendarOutline> = () => (
  <CalendarOutline />
);
