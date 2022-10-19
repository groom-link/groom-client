import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Spinner from './index';

export default {
  title: 'atoms/Spinner',
  component: Spinner
} as ComponentMeta<typeof Spinner>;

export const Primary: ComponentStory<typeof Spinner> = () => <Spinner />;
