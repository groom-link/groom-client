import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tag from './index';

export default {
  title: 'atoms/Tag',
  component: Tag,
  argTypes: {
    text: {
      description: '태그 안에 들어갈 텍스트를 전달받습니다.',
      control: {
        type: 'text'
      },
      defaultValue: '태그'
    },
    state: {
      description:
        '볼 수만 있는 상태인지, 삭제할 수 있는 상태인지를 정의합니다.',
      defaultValue: 'default'
    },
    onCancel: {
      description:
        '삭제할 수 있는 상태에서 태그 클릭 시 실행되는 콜백 함수입니다.'
    }
  }
} as ComponentMeta<typeof Tag>;

export const Primary: ComponentStory<typeof Tag> = ({ state, text }) => (
  <Tag {...{ state, text }} onCancel={() => console.log('clicked')} />
);
