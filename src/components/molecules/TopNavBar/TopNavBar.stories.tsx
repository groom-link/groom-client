import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TopNavBar from './index';

export default {
  title: 'molecules/TopNavBar',
  component: TopNavBar,
  argTypes: {
    setting: {
      control: 'select',
      options: [true, false]
    }
  }
} as ComponentMeta<typeof TopNavBar>;

export const Primary: ComponentStory<typeof TopNavBar> = ({ setting }) => {
  return setting ? (
    <TopNavBar
      {...{
        setting,
        backURL: '',
        settingURL: ''
      }}
    />
  ) : (
    <TopNavBar {...{ setting, backURL: '' }} />
  );
};
