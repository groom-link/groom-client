import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import X from './index';

export default {
  title: 'icons/X',
  component: X
} as ComponentMeta<typeof X>;

export const Primary: ComponentStory<typeof X> = () => <X />;
