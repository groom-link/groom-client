import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Stepper from './index';

export default {
  title: 'molecules/Stepper',
  component: Stepper
} as ComponentMeta<typeof Stepper>;

export const Primary: ComponentStory<typeof Stepper> = ({ label = '라벨' }) => {
  const [value, setValue] = useState(0);

  const handleDecrease = () => setValue((pre) => pre - 1);

  const handleIncrease = () => setValue((pre) => pre + 1);

  return (
    <Stepper
      onDecrease={handleDecrease}
      onIncrease={handleIncrease}
      {...{ value, label }}
    />
  );
};
