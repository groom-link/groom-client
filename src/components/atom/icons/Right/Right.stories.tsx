import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Right from './index';

export default {
  title: 'icons/Right',
  component: Right
} as ComponentMeta<typeof Right>;

export const Primary: ComponentStory<typeof Right> = () => <Right />;
