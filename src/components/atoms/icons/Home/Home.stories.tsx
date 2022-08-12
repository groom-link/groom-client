import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Home from './index';

export default {
  title: 'icons/Home',
  component: Home
} as ComponentMeta<typeof Home>;

export const Primary: ComponentStory<typeof Home> = () => <Home />;
