import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextArea from './index';

export default {
  title: 'molecules/TextArea',
  component: TextArea
} as ComponentMeta<typeof TextArea>;

export const Primary: ComponentStory<typeof TextArea> = ({
  errorMessage,
  label = '라벨',
  placeholder = '플레이스 홀더',
  value,
  onChange
}) => <TextArea {...{ errorMessage, label, placeholder, value, onChange }} />;
