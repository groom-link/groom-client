import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import List from './index';

export default {
  title: 'atoms/List',
  component: List
} as ComponentMeta<typeof List>;

export const Primary: ComponentStory<typeof List> = ({
  href = '',
  children = 'List'
}) => <List {...{ href, children }} />;
