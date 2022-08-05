import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LeftArrow from './index';

export default {
  title: 'icons/LeftArrow',
  component: LeftArrow
} as ComponentMeta<typeof LeftArrow>;

export const Primary: ComponentStory<typeof LeftArrow> = () => <LeftArrow />;
