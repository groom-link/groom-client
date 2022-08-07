import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import RadioButton from './index';

export default {
  title: 'molecules/RadioButton',
  component: RadioButton,
  argTypes: {
    radioLabel: {
      control: 'text'
    },
    option1Label: {
      control: 'text'
    },
    option2Label: {
      control: 'text'
    }
  }
} as ComponentMeta<typeof RadioButton>;

export const Primary: ComponentStory<typeof RadioButton> = ({
  radioLabel = '라벨',
  option1Label = '라디오 버튼1',
  option2Label = '라디오 버튼2'
}) => {
  const [selectedValue, setSelectedValue] = useState<1 | 2>(1);

  const handleChange = () => setSelectedValue((pre) => (pre === 1 ? 2 : 1));

  return (
    <RadioButton
      {...{
        radioLabel,
        option1Label,
        option2Label,
        selectedValue,
        onChange: handleChange
      }}
    />
  );
};
