import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import PersonOutline from './index';

export default {
  title: 'icons/PersonOutline',
  component: PersonOutline
} as ComponentMeta<typeof PersonOutline>;

export const Primary: ComponentStory<typeof PersonOutline> = () => (
  <PersonOutline />
);
