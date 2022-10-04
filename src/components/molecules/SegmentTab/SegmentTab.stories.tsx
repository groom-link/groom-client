import { ChangeEventHandler, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SegmentTab from './index';

export default {
  title: 'molecules/SegmentTab',
  component: SegmentTab
} as ComponentMeta<typeof SegmentTab>;

type TabValue = 'left' | 'right';

export const Primary: ComponentStory<typeof SegmentTab> = ({
  leftTabLabel = '왼쪽 탭',
  rightTabLabel = '오른쪽 탭'
}) => {
  const [value, setValue] = useState<TabValue>('left');

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = ({
    target: { value }
  }) => setValue(value as TabValue);

  return (
    <SegmentTab
      {...{ leftTabLabel, rightTabLabel, value }}
      onChange={handleChangeValue}
    />
  );
};
