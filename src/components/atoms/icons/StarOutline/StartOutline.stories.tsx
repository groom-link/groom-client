import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import StarOutline from './index';

export default {
  title: 'icons/StarOutline',
  component: StarOutline
} as ComponentMeta<typeof StarOutline>;

export const Primary: ComponentStory<typeof StarOutline> = () => (
  <StarOutline />
);
