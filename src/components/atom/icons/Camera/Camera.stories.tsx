import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Camera from './index';

export default {
  title: 'icons/Camera',
  component: Camera
} as ComponentMeta<typeof Camera>;

export const Primary: ComponentStory<typeof Camera> = () => <Camera />;
