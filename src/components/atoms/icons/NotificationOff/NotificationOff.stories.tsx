import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import NotificationOff from './index';

export default {
  title: 'icons/NotificationOff',
  component: NotificationOff
} as ComponentMeta<typeof NotificationOff>;

export const Primary: ComponentStory<typeof NotificationOff> = () => (
  <NotificationOff />
);
