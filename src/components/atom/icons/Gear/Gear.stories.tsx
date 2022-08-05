import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Gear from './index';

export default {
  title: 'icons/Gear',
  component: Gear
} as ComponentMeta<typeof Gear>;

export const Primary: ComponentStory<typeof Gear> = () => <Gear />;
