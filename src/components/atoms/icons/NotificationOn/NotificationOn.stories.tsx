import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import NotificationOn from './index';

export default {
  title: 'icons/NotificationOn',
  component: NotificationOn
} as ComponentMeta<typeof NotificationOn>;

export const Primary: ComponentStory<typeof NotificationOn> = () => (
  <NotificationOn />
);
