import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SearchThin from './index';

export default {
  title: 'icons/SearchThin',
  component: SearchThin
} as ComponentMeta<typeof SearchThin>;

export const Primary: ComponentStory<typeof SearchThin> = () => <SearchThin />;
