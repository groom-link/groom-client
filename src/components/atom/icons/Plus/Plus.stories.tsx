import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Plus from './index';

export default {
  title: 'icons/Plus',
  component: Plus
} as ComponentMeta<typeof Plus>;

export const Primary: ComponentStory<typeof Plus> = () => <Plus />;
