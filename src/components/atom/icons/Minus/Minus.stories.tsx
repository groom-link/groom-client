import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Minus from './index';

export default {
  title: 'icons/Minus',
  component: Minus
} as ComponentMeta<typeof Minus>;

export const Primary: ComponentStory<typeof Minus> = () => <Minus />;
