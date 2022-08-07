import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Left from './index';

export default {
  title: 'icons/Left',
  component: Left
} as ComponentMeta<typeof Left>;

export const Primary: ComponentStory<typeof Left> = () => <Left />;
