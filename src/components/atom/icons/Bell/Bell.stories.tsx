import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Bell from './index';

export default {
  title: 'icons/Bell',
  component: Bell
} as ComponentMeta<typeof Bell>;

export const Primary: ComponentStory<typeof Bell> = () => <Bell />;
