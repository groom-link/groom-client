import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArrowRight from './index';

export default {
  title: 'icons/ArrowRight',
  component: ArrowRight
} as ComponentMeta<typeof ArrowRight>;

export const Primary: ComponentStory<typeof ArrowRight> = () => <ArrowRight />;
