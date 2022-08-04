import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Label from './index';

export default {
  title: 'atoms/Label',
  component: Label,
  argTypes: {
    text: {
      description: '화면에 표시할 텍스트를 전달받습니다.',
      control: {
        type: 'text'
      },
      defaultValue: '라벨'
    }
  }
} as ComponentMeta<typeof Label>;

export const Primary: ComponentStory<typeof Label> = ({ text }) => (
  <Label {...{ text }} />
);
