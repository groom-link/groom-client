import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import KakaoLoginButton from './index';

export default {
  title: 'atoms/KakaoLoginButton',
  component: KakaoLoginButton
} as ComponentMeta<typeof KakaoLoginButton>;

export const Primary: ComponentStory<typeof KakaoLoginButton> = ({
  onClick
}) => <KakaoLoginButton onClick={onClick} />;
