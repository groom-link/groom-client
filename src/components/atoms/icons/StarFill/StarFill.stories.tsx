import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import StarFill from './index';

export default {
  title: 'icons/StarFill',
  component: StarFill
} as ComponentMeta<typeof StarFill>;

export const Primary: ComponentStory<typeof StarFill> = () => <StarFill />;
