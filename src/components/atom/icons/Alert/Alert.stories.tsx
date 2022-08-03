import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Alert from './index';

export default {
  title: 'icons/Alert',
  component: Alert
} as ComponentMeta<typeof Alert>;

export const Primary: ComponentStory<typeof Alert> = () => <Alert />;
