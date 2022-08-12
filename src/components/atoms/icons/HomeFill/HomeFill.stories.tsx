import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HomeFill from './index';

export default {
  title: 'icons/HomeFill',
  component: HomeFill
} as ComponentMeta<typeof HomeFill>;

export const Primary: ComponentStory<typeof HomeFill> = () => <HomeFill />;
