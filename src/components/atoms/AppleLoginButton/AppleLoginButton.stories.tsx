import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import AppleLoginButton from './index';

export default {
  title: 'atoms/AppleLoginButton',
  component: AppleLoginButton
} as ComponentMeta<typeof AppleLoginButton>;

export const Primary: ComponentStory<typeof AppleLoginButton> = () => (
  <AppleLoginButton />
);
