import { ChangeEventHandler } from 'react';

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
      <label htmlFor="tab1">{leftTabLabel}</label>
      <input
        type="radio"
        name="segment-tab"
        id="tab1"
        checked={value === 'left'}
        value="left"
        onChange={onChange}
      />
      <label htmlFor="tab2">{rightTabLabel}</label>
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
