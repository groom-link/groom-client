import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Pencil from './index';

export default {
  title: 'icons/Pencil',
  component: Pencil
} as ComponentMeta<typeof Pencil>;

export const Primary: ComponentStory<typeof Pencil> = () => <Pencil />;
