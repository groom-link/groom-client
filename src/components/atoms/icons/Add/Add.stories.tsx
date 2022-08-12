import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Add from './index';

export default {
  title: 'icons/Add',
  component: Add
} as ComponentMeta<typeof Add>;

export const Primary: ComponentStory<typeof Add> = () => <Add />;
