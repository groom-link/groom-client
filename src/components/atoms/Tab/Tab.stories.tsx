import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tab from './index';

export default {
  title: 'atoms/Tab',
  component: Tab
} as ComponentMeta<typeof Tab>;

export const Primary: ComponentStory<typeof Tab> = ({
  isSelected,
  children = '탭'
}) => (
  <Tab isSelected={isSelected} htmlFor="">
    {children}
  </Tab>
);
