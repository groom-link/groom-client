import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import OK from './index';

export default {
  title: 'icons/OK',
  component: OK
} as ComponentMeta<typeof OK>;

export const Primary: ComponentStory<typeof OK> = () => <OK />;
