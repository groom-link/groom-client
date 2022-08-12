import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArrowLeft from './index';

export default {
  title: 'icons/ArrowLeft',
  component: ArrowLeft
} as ComponentMeta<typeof ArrowLeft>;

export const Primary: ComponentStory<typeof ArrowLeft> = () => <ArrowLeft />;
