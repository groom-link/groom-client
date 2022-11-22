import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import File from './index';

export default {
  title: 'icons/File',
  component: File
} as ComponentMeta<typeof File>;

export const Primary: ComponentStory<typeof File> = () => <File />;
