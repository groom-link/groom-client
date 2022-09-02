import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextButton from './index';

export default {
  title: 'atoms/TextButton',
  component: TextButton
} as ComponentMeta<typeof TextButton>;

export const Primary: ComponentStory<typeof TextButton> = ({
  label = '텍스트 버튼',
  color = 'navy',
  ...props
}) => <TextButton {...{ label, color, ...props }} />;
