import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './index';

export default {
  title: 'atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>;

export const DefaultImage: ComponentStory<typeof Button> = ({
  label = '버튼 이름',
  ...props
}) => <Button {...{ label, ...props }} />;
