import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import GroupPage from './index';

export default {
  title: 'templates/GroupPage',
  component: GroupPage
} as ComponentMeta<typeof GroupPage>;

export const Primary: ComponentStory<typeof GroupPage> = ({
  roomId,
  roomName,
  selectedTabIndex = 0
}) => (
  <GroupPage {...{ roomId, selectedTabIndex, roomName }}>
    <div>콘텐츠</div>
  </GroupPage>
);
