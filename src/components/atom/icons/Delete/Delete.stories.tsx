import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Delete from './index';

export default {
  title: 'icons/Delete',
  component: Delete
} as ComponentMeta<typeof Delete>;

export const Primary: ComponentStory<typeof Delete> = () => <Delete />;
