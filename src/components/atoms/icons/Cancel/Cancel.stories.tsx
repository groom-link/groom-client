import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Cancel from './index';

export default {
  title: 'icons/Cancel',
  component: Cancel
} as ComponentMeta<typeof Cancel>;

export const Primary: ComponentStory<typeof Cancel> = () => <Cancel />;
