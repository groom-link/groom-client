import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CheckCircle from './index';

export default {
  title: 'icons/CheckCircle',
  component: CheckCircle
} as ComponentMeta<typeof CheckCircle>;

export const Primary: ComponentStory<typeof CheckCircle> = () => (
  <CheckCircle />
);
