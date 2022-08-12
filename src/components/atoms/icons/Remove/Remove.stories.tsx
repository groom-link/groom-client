import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Remove from './index';

export default {
  title: 'icons/Remove',
  component: Remove
} as ComponentMeta<typeof Remove>;

export const Primary: ComponentStory<typeof Remove> = () => <Remove />;
