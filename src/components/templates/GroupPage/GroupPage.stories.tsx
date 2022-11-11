import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import GroupPage from './index';

export default {
  title: 'templates/GroupPage',
  component: GroupPage
} as ComponentMeta<typeof GroupPage>;

export const Primary: ComponentStory<typeof GroupPage> = ({
  roomId,
  selectedTabIndex = 0
}) => (
  <GroupPage {...{ roomId, selectedTabIndex }}>
    <div>콘텐츠</div>
  </GroupPage>
);
