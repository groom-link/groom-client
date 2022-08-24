import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Thumbnail from './index';

export default {
  title: 'atoms/Thumbnail',
  component: Thumbnail
} as ComponentMeta<typeof Thumbnail>;

export const Primary: ComponentStory<typeof Thumbnail> = ({
  size = 'small',
  company = '버거킹',
  menu = '와퍼주니어세트',
  price = 6900,
  isActive = false,
  onClick
}) => <Thumbnail {...{ size, company, menu, price, isActive, onClick }} />;
