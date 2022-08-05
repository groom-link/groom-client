import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HambergerMenu from './index';

export default {
  title: 'icons/HambergerMenu',
  component: HambergerMenu
} as ComponentMeta<typeof HambergerMenu>;

export const Primary: ComponentStory<typeof HambergerMenu> = () => (
  <HambergerMenu />
);
