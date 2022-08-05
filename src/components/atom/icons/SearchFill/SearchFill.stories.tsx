import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SearchFill from './index';

export default {
  title: 'icons/SearchFill',
  component: SearchFill
} as ComponentMeta<typeof SearchFill>;

export const Primary: ComponentStory<typeof SearchFill> = () => <SearchFill />;
