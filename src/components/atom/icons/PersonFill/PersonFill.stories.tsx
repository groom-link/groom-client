import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import PersonFill from './index';

export default {
  title: 'icons/PersonFill',
  component: PersonFill
} as ComponentMeta<typeof PersonFill>;

export const Primary: ComponentStory<typeof PersonFill> = () => <PersonFill />;
