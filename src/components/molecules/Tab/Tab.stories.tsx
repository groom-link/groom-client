import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tab from './index';

export default {
  title: 'molecules/Tab',
  component: Tab,
  argTypes: {
    activeMenu: {
      options: ['홈', '모임 찾기', '내 일정', '내 GRoom'],
      defaultValue: '홈',
      control: {
        type: 'radio'
      }
    }
  }
} as ComponentMeta<typeof Tab>;

export const Template: ComponentStory<typeof Tab> = ({ activeMenu }) => (
  <Tab {...{ activeMenu }} />
);
