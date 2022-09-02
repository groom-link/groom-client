import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextInput from './index';

export default {
  title: 'molecules/TextInput',
  component: TextInput,
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
    errorMessage: {
      control: {
        type: 'text'
      }
    }
  }
} as ComponentMeta<typeof TextInput>;

export const Primary: ComponentStory<typeof TextInput> = ({
  label = '라벨',
  placeholder = '플레이스홀더',
  ...props
}) => <TextInput {...{ label, placeholder, ...props }} />;
