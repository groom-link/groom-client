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
  const handleBackButtonClick = () => console.log('back button clicked');

  return setting ? (
    <TopNavBar
      setting={setting}
      settingURL=""
      onBackButtonClick={handleBackButtonClick}
    />
  ) : (
    <TopNavBar setting={setting} onBackButtonClick={handleBackButtonClick} />
  );
};
