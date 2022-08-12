import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import UserFill from './index';

export default {
  title: 'icons/UserFill',
  component: UserFill
} as ComponentMeta<typeof UserFill>;

export const Primary: ComponentStory<typeof UserFill> = () => <UserFill />;
