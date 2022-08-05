import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Edit from './index';

export default {
  title: 'icons/Edit',
  component: Edit
} as ComponentMeta<typeof Edit>;

export const Primary: ComponentStory<typeof Edit> = () => <Edit />;
