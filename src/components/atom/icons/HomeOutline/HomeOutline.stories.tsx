import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HomeOutline from './index';

export default {
  title: 'icons/HomeOutline',
  component: HomeOutline
} as ComponentMeta<typeof HomeOutline>;

export const Primary: ComponentStory<typeof HomeOutline> = () => (
  <HomeOutline />
);
