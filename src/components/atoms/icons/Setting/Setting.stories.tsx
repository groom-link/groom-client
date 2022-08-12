import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Setting from './index';

export default {
  title: 'icons/Setting',
  component: Setting
} as ComponentMeta<typeof Setting>;

export const Primary: ComponentStory<typeof Setting> = () => <Setting />;
