import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DEMO_PROFILE_IMAGE_URL } from '../../../__mocks__';
import MemberList from './index';

export default {
  title: 'atoms/MemberList',
  component: MemberList
} as ComponentMeta<typeof MemberList>;

export const Primary: ComponentStory<typeof MemberList> = ({
  src = DEMO_PROFILE_IMAGE_URL,
  name = '구성원 이름'
}) => <MemberList {...{ src, name }} />;
