import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import FilledCancel from './index';

export default {
  title: 'icons/FilledCancel',
  component: FilledCancel
} as ComponentMeta<typeof FilledCancel>;

export const Primary: ComponentStory<typeof FilledCancel> = () => (
  <FilledCancel />
);
