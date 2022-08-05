import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import User from './index';

export default {
  title: 'icons/User',
  component: User
} as ComponentMeta<typeof User>;

export const Primary: ComponentStory<typeof User> = () => <User />;
