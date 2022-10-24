import { ComponentMeta, ComponentStory } from '@storybook/react';

import GroupPageHeader from './index';

export default {
  title: 'organisms/GroupPageHeader',
  component: GroupPageHeader
} as ComponentMeta<typeof GroupPageHeader>;

export const Primary: ComponentStory<typeof GroupPageHeader> = ({
  groupName = '그룹 이름'
}) => <GroupPageHeader groupName={groupName} />;
