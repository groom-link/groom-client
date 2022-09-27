import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DEMO_GROUP_IMAGE_URL } from '../../../__mocks__';
import ThumbnailList from './index';

export default {
  title: 'molecules/ThumbnailList',
  component: ThumbnailList
} as ComponentMeta<typeof ThumbnailList>;

export const Primary: ComponentStory<typeof ThumbnailList> = ({
  profileImageURL = DEMO_GROUP_IMAGE_URL,
  title = '소마 GRoom 팀 개발 모임',
  tags = ['#태그1', '#태그2', '#태그3'],
  numberOfMembers = 3,
  numberOfMyTodos = 2,
  nearMeeting = {
    title: '소마 개발 회의',
    location: '서울시 강남구 선릉역 4번 출구',
    date: '2022.06.01(목)'
  }
}) => (
  <ThumbnailList
    {...{
      profileImageURL,
      title,
      tags,
      numberOfMembers,
      numberOfMyTodos,
      nearMeeting
    }}
  />
);
