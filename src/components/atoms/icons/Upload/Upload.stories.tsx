import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Upload from './index';

export default {
  title: 'icons/Upload',
  component: Upload
} as ComponentMeta<typeof Upload>;

export const Primary: ComponentStory<typeof Upload> = () => <Upload />;
