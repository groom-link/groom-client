import { ChangeEventHandler } from 'react';

import { Tab } from '../../atoms';

type Props = {
  className?: string;
  leftTabLabel: string;
  rightTabLabel: string;
  value: 'left' | 'right';
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const SegmentTab = ({
  className,
  leftTabLabel,
  rightTabLabel,
  value,
  onChange
}: Props) => {
  return (
    <div className={className}>
      <Tab isSelected={value === 'left'} htmlFor="tab1">
        {leftTabLabel}
      </Tab>
      <input
        type="radio"
        name="segment-tab"
        id="tab1"
        checked={value === 'left'}
        value="left"
        onChange={onChange}
      />
      <Tab isSelected={value === 'right'} htmlFor="tab2">
        {rightTabLabel}
      </Tab>
      <input
        type="radio"
        name="segment-tab"
        id="tab2"
        checked={value === 'right'}
        value="right"
        onChange={onChange}
      />
    </div>
  );
};

export default SegmentTab;
