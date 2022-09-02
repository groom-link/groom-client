import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import GPS from './index';

export default {
  title: 'icons/GPS',
  component: GPS
} as ComponentMeta<typeof GPS>;

export const Primary: ComponentStory<typeof GPS> = () => <GPS />;
