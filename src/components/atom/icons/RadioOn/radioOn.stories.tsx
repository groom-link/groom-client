import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import RadioOn from './index';

export default {
  title: 'icons/RadioOn',
  component: RadioOn
} as ComponentMeta<typeof RadioOn>;

export const Primary: ComponentStory<typeof RadioOn> = () => <RadioOn />;
