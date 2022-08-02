import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SearchThick from './index';

export default {
  title: 'icons/SearchThick',
  component: SearchThick
} as ComponentMeta<typeof SearchThick>;

export const Primary: ComponentStory<typeof SearchThick> = () => (
  <SearchThick />
);
