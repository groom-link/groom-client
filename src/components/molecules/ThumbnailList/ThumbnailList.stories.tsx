import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ThumbnailList from './index';

export default {
  title: 'molecules/ThumbnailList',
  component: ThumbnailList
} as ComponentMeta<typeof ThumbnailList>;

export const Primary: ComponentStory<typeof ThumbnailList> = () => (
  <ThumbnailList />
);
