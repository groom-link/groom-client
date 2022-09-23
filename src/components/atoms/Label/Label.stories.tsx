import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Label from './index';

export default {
  title: 'atoms/Label',
  component: Label,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Label>;

export const Primary: ComponentStory<typeof Label> = ({
  children = '라벨',
  marginBottom
}) => <Label marginBottom={marginBottom}>{children}</Label>;
