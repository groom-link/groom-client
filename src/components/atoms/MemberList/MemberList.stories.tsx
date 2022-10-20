import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MemberList from './index';

export default {
  title: 'atoms/MemberList',
  component: MemberList
} as ComponentMeta<typeof MemberList>;

export const Primary: ComponentStory<typeof MemberList> = () => <MemberList />;
