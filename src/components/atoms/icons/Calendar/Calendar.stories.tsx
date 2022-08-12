import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Calendar from './index';

export default {
  title: 'icons/Calendar',
  component: Calendar
} as ComponentMeta<typeof Calendar>;

export const Primary: ComponentStory<typeof Calendar> = () => <Calendar />;
