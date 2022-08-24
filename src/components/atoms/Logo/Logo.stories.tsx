import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Logo from './index';

export default {
  title: 'atoms/Logo',
  component: Logo
} as ComponentMeta<typeof Logo>;

export const Primary: ComponentStory<typeof Logo> = () => <Logo />;
