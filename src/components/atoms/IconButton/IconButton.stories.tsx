import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import IconButton from './index';

export default {
  title: 'atoms/IconButton',
  component: IconButton
} as ComponentMeta<typeof IconButton>;

export const Primary: ComponentStory<typeof IconButton> = ({
  type = 'decrease',
  disabled,
  onClick,
  color = 'navy'
}) => <IconButton {...{ type, disabled, onClick, color }} />;
