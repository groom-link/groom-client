import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Kakao from './index';

export default {
  title: 'icons/Kakao',
  component: Kakao
} as ComponentMeta<typeof Kakao>;

export const Primary: ComponentStory<typeof Kakao> = () => <Kakao />;
