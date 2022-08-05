import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import RightArrow from './index';

export default {
  title: 'icons/RightArrow',
  component: RightArrow
} as ComponentMeta<typeof RightArrow>;

export const Primary: ComponentStory<typeof RightArrow> = () => <RightArrow />;
