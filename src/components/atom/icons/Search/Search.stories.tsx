import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Search from './index';

export default {
  title: 'icons/Search',
  component: Search
} as ComponentMeta<typeof Search>;

export const Primary: ComponentStory<typeof Search> = () => <Search />;
