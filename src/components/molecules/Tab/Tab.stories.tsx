import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tab from './index';

export default {
  title: 'molecules/Tab',
  component: Tab,
  argTypes: {
    activeMenu: {
      description: '현재 활성화된 메뉴 이름을 전달받습니다.',
      options: ['홈', '모임 찾기', '내 일정', '내 GRoom'],
      defaultValue: '홈',
      control: {
        type: 'radio'
      }
    }
  }
} as ComponentMeta<typeof Tab>;

export const Primary: ComponentStory<typeof Tab> = ({ activeMenu }) => (
  <Tab {...{ activeMenu }} />
);
