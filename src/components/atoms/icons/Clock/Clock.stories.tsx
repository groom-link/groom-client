import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Clock from './index';

export default {
  title: 'icons/Clock',
  component: Clock
} as ComponentMeta<typeof Clock>;

export const Primary: ComponentStory<typeof Clock> = () => <Clock />;
