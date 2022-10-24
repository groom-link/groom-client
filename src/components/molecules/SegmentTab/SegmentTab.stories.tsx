import { ComponentMeta, ComponentStory } from '@storybook/react';

import SegmentTab from './index';

export default {
  title: 'molecules/SegmentTab',
  component: SegmentTab
} as ComponentMeta<typeof SegmentTab>;

export const Primary: ComponentStory<typeof SegmentTab> = ({
  leftTabLabel = '왼쪽 탭',
  rightTabLabel = '오른쪽 탭',
  selectedTabIndex = 0,
  leftTabHref = '',
  rightTabHref = ''
}) => {
  return (
    <SegmentTab
      {...{
        leftTabLabel,
        rightTabLabel,
        selectedTabIndex,
        leftTabHref,
        rightTabHref
      }}
    />
  );
};
