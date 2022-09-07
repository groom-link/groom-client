import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Toggle from './index';

export default {
  title: 'atoms/Toggle',
  component: Toggle
} as ComponentMeta<typeof Toggle>;

export const Primary: ComponentStory<typeof Toggle> = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggleClick = () => setIsOn((pre) => !pre);

  return <Toggle isOn={isOn} onClick={handleToggleClick} />;
};
