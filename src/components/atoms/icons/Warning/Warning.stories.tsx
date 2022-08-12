import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Warning from './index';

export default {
  title: 'icons/Warning',
  component: Warning
} as ComponentMeta<typeof Warning>;

export const Primary: ComponentStory<typeof Warning> = () => <Warning />;
